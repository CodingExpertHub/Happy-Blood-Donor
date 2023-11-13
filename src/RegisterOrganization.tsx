import React, { useState } from "react";
import { createBrowserHistory } from 'history';
import Header from "./Header";
import { Button, Checkbox, Input, InputNumber, Radio, Select } from "antd";
import "react-phone-number-input/style.css";
import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Form, Typography, notification } from 'antd';
import { OrgsignUp, OrgSignUpsendOTP } from "./api/authendication";



const { Text } = Typography;

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const monthFormat = "MM/YYYY";

const RegisterOrganisation = () => {
  const registerFields1 = [
    "Organisation Name",
    "Phone Number",
    "Email address",
    
    
  ];
  const registerFields2 = ["Category", "Location"];
  const addressFields1 = ["Location"];
  const history = createBrowserHistory();
 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orgName, setorgName] = useState("");
  const [category, setCategory] = useState(""); 
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [user_Type, setUser_Type] = useState("organisation");
  const [location, setLocation] =  useState("");
  const [isVerifyEmailDisabled, setIsVerifyEmailDisabled] = useState(false);
  
 
  

  // const handleOTPSubmit = async () => {
  //   try {
  //     setIsVerifyEmailDisabled(true);
  //     const result = await OrgSignUpsendOTP(email);
  //     setOtpSent(true);
  //     setIsVerifyEmailDisabled(false);
  //   } catch (error) {
  //     setIsVerifyEmailDisabled(false);
  //     console.log(error);
  //   }
  // };
  const handleOTPSubmit = async () => {
    try {
     // form.validateFields(['email']);

      setIsVerifyEmailDisabled(true);
      const result = await OrgSignUpsendOTP(email);

      if (result === "This User Allready exist in our db") {
        // Display notification for unregistered email
        notification.warning({
          message: 'User already Registered',
          description: 'The provided email is registered. Please login up or use a different email.',
        });
      } else if (result === "Invalid Details") {
        // Display notification for invalid details
        notification.error({
          message: 'Invalid Details',
          description: 'The provided details are invalid. Please check your information and try again.',
        });
      } else {
        // If the user exists, proceed with OTP and show relevant notifications
        setOtpSent(true);
        setIsVerifyEmailDisabled(false);
        notification.success({
          message: 'Otp sent Successfully check your mail',
          description: 'Email sent Successfully',
        });  

      }  
    } catch (error) {
      setIsVerifyEmailDisabled(false);
      notification.error({
        message: 'Otp sent Failed check mail id',
        description: 'OTP was unsuccessful. Please try again or contact support.',
      });
      console.log(error);
    }
    
  };


  const handleSubmit = async () => {
    try {

      if (!orgName || !mobile || !email || !category || !location || !otp) {
        notification.error({
          message: 'Validation Error',
          description: 'Please fill in all the required fields.',
        });
        return;
      }


      setIsSubmitting(true);
      const result = await OrgsignUp ( orgName, category, email, otp, mobile, user_Type, location );
      setIsSubmitting(false);

      if (result && result.signup === "success") {
        notification.success({
          message: 'Registration Successful!',
          description: 'You have successfully registered. Redirecting to login page.',
        });
        history.push("/loginorganisation");
        window.location.reload();
      } else {
        notification.error({
          message: 'Registration Failed',
          description: 'Registration was unsuccessful. Please try again or contact support.',
        });
        history.push("/registerorganization");
        window.location.reload();
        // Handle unsuccessful registration
        // Display an error message or redirect to a different page
      }
    } catch (error) {
      setIsSubmitting(false);
      console.log(error);
    }
  };


  const handleCategory = (value: string) => {
    setCategory(value);
  };

 
 
  return (
    <div>
      <Header />
      <div className="pt-12 mt-12">
        <div className="p-auto m-auto w-10/12 bg-red-500">
          <p className="text-center text-white text-xl py-6">
            Register as a Organisation
          </p>
        </div>

        <div className="flex p-auto m-auto w-10/12">
          <div className="w-2/12 flex  flex-col gap-[10px]">
            {registerFields1.map((rfield1) =>
              rfield1 === "Previous Donation Details" ? (
                <p className="font-semibold mt-9">{rfield1}</p>
              ) : (
                <p className="font-semibold">{rfield1}</p>
              )
            )}
          </div>
          <div className="w-5/12 pr-8">
            <div className="flex gap-[20px]">
              <Input 
                placeholder="First Name" 
                className="w-[350px]" 
                value={orgName}
                onChange={(e) => setorgName(e.target.value)}
              />
             
            </div>
            <div className="mt-3 w-[87%]  border-1 rounded-md">
            <Input
              type="tel"
              placeholder="phone number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
             
            </div>
            
            <div className="mt-3 pr-14 w-[100%]">
              <Input.Search
               type="email"
               placeholder="must contain @ symbol"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               disabled={otpSent}
               enterButton={
          <Button
            type="primary" 
            loading={isVerifyEmailDisabled}
            onClick={handleOTPSubmit}
            style={{ color: 'red' }}   
          >
            Send OTP
          </Button>
        }
        onSearch={handleOTPSubmit}
      />

      {otpSent && (
        <Text style={{ fontSize: 'sm', marginTop: '0.5rem', color: 'gray.500' }}>
          OTP sent to your email. Please enter the OTP below.
        </Text>
      )}

      {otpSent && (
        <Form.Item
          label="OTP"
          required
          style={{ marginBottom: '1rem' }}
        >
          <Input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </Form.Item>
      )}
    </div>

            
            {/* <div className="flex gap-[30px] mt-3 pr-14">
            <Input 
                placeholder="location" 
                className="w-full"
                value={location}
                onChange={(e) => setLocation(e.target.value)} 

              />
            </div> */}
          </div>

          <div className="w-1/12 flex flex-col gap-[6px]">
            {registerFields2.map((rfield2) => (
              <p className="font-semibold">{rfield2}</p>
            ))}
          </div>
          <div className="w-4/12">
            <div>
            <Select
                className="w-full"
                placeholder="Category"
                value={category}
                onChange={handleCategory}
                options={[
                  { value: "Blood Bank", label: "Blood Bank" },
                  { value: "Hospitals", label: "Hospitals" },
                  { value: "NGO", label: "NGo" },
                  { value: "Medical Colleges", label: "Medical Colleges" },
                ]}
              />
               <div className="mt-3">
               <Input 
                placeholder="location" 
                className="w-full"
                value={location}
                onChange={(e) => setLocation(e.target.value)} 

              />
              
              </div>
              
            </div>
            
          </div>
        </div>
      </div>

      <div className="pb-8">
        
        <div className="mt-8">
          <div className="p-auto m-auto w-10/12 text-center">
            <Checkbox className=" text-center items-center align-middle">
              <p className="text-center text-sm mt-3">
                I have read and agree the{" "}
                <span className="text-blue-500">Terms & Service</span> and{" "}
                <span className="text-blue-500">Privacy Policy</span>
              </p>
            </Checkbox>
          </div>
          <div className="mt-6 text-center">
          <Button 
            type="primary" 
            className='ml-8 bg-red-800 hover:!bg-red-900 px-12 !items-center justify-center !pb-7'
            loading={isSubmitting}
            onClick={handleSubmit}
          >
            Register
          </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RegisterOrganisation;
