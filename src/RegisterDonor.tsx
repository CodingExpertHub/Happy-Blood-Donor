import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import { Button, Checkbox, Input, InputNumber, Radio, Select } from "antd";
import "react-phone-number-input/style.css";
import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Form, Typography, notification } from 'antd';
import { UsersignUp, UserSignUpsendOTP } from "./api/authendication";



const { Text } = Typography;

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const monthFormat = "MM/YYYY";

const RegisterDonor = () => {
  const registerFields1 = [
    "Donor Name",
    "Email address",
    "Phone Number",
    "previous donation date",
    "Location"
  ];
  const registerFields2 = ["Gender", "Age", "Blood Group"];
  const addressFields1 = ["Location"];
  const navigate = useNavigate();
 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("M");
  const [dob, setDob] =  useState("");
  const [bloodGroup, setBloodGroup] = useState(""); 
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [user_Type, setUser_Type] = useState("user");
  const [lastdonationdate, setLastdonationdate] = useState("");
  //const [lastdonationdate, setLastdonationdate] = useState<Dayjs | null>(dayjs());
  const [location, setLocation] =  useState("");
  const [isVerifyEmailDisabled, setIsVerifyEmailDisabled] = useState(false);
  
 
  

  const handleOTPSubmit = async () => {
    try {
      setIsVerifyEmailDisabled(true);
      const result = await UserSignUpsendOTP(email);
      setOtpSent(true);
      setIsVerifyEmailDisabled(false);
    } catch (error) {
      setIsVerifyEmailDisabled(false);
      console.log(error);
    }
  };


  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      const result = await UsersignUp ( firstName, lastName, gender, dob, bloodGroup, mobile,  email, otp, user_Type, lastdonationdate, location );
      setIsSubmitting(false);

      if (result && result.signup === "success") {
        notification.success({
          message: 'Registration Successful!',
          description: 'You have successfully registered. Redirecting to login page.',
        });
        navigate("/logindonor");
      } else {
        notification.error({
          message: 'Registration Failed',
          description: 'Registration was unsuccessful. Please try again or contact support.',
        });
        navigate("/registerdonor");
        // Handle unsuccessful registration
        // Display an error message or redirect to a different page
      }
    } catch (error) {
      setIsSubmitting(false);
      console.log(error);
    }
  };





  // const handleDateChange = (date: any) => {
  //   setLastdonationdate(date); // Assuming date is in the format you expect
  // };
  const handleBloodGroupChange = (value: string) => {
    setBloodGroup(value);
  };


  const onGenderChange = (e: any) => {
    console.log("radio checked", e.target.value);
    setGender(e.target.value);
  };
 
 
  return (
    <div>
      <Header />
      <div className="pt-12 mt-12">
        <div className="p-auto m-auto w-10/12 bg-red-500">
          <p className="text-center text-white text-xl py-6">
            Register as a Donor
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
                className="w-[210px]" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input 
                placeholder="Last Name" 
                className="w-[210px]" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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

            <div className="mt-3 w-[87%]  border-1 rounded-md">
            <Input
              type="tel"
              placeholder="phone number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
             
            </div>
            <div className="flex gap-[30px] mt-3 pr-14">
              
            <input

             type="date"
             className="w-full"
             value={lastdonationdate} // Convert to Dayjs here
             onChange={(e) => setLastdonationdate(e.target.value)}
          
        />
            </div>
            <div className="flex gap-[30px] mt-3 pr-14">
              
            <Input 
                placeholder="location" 
                className="w-full"
                value={location}
                onChange={(e) => setLocation(e.target.value)} 

              />
            </div>
          </div>

          <div className="w-1/12 flex flex-col gap-[6px]">
            {registerFields2.map((rfield2) => (
              <p className="font-semibold">{rfield2}</p>
            ))}
          </div>
          <div className="w-4/12">
            <div>
              <Radio.Group onChange={onGenderChange} value={gender}>
                <Radio value={"male"}>Male</Radio>
                <Radio value={"female"}>Female</Radio>
                <Radio value={"others"}>Other</Radio>
              </Radio.Group>
            </div>
            <div className="mt-3">
              <input
                type="date"
                placeholder="Date of birth"
                className="w-full"
                value={dob}
                onChange={(e) => setDob (e.target.value)} 

              />
            </div>
            <div className="mt-3">
              <Select
                className="w-full"
                placeholder="Blood Group"
                value={bloodGroup}
                onChange={handleBloodGroupChange}
                options={[
                  { value: "O+", label: "O+" },
                  { value: "O-", label: "O-" },
                  { value: "A+", label: "A+" },
                  { value: "A-", label: "A-" },
                  { value: "B+", label: "B+" },
                  { value: "B-", label: "B-" },
                  { value: "AB+", label: "AB+" },
                  { value: "AB-", label: "AB-" },
                ]}
              />
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

export default RegisterDonor;
