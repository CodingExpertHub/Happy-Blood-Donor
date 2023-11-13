import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import { Button, Checkbox, Input, InputNumber, Radio, Select } from "antd";
import "react-phone-number-input/style.css";
import moment from 'moment';
import dayjs from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";
import TextArea from "antd/es/input/TextArea";
import { Form, Typography, notification,  DatePicker } from 'antd';
import { UsersignUp, UserSignUpsendOTP } from "./api/authendication";



const { Text } = Typography;

// dayjs.extend(customParseFormat);

// //const { RangePicker } = DatePicker;

// const monthFormat = "MM/YYYY";

const RegisterDonor = () => {
  const registerFields1 = [
    "Donor Name",
    "Email address",
    
    "Phone Number",
    "previous donation date",
    "Location"
  ];
  const registerFields2 = ["Gender", "Dob", "Blood Group"];
  const addressFields1 = ["Location"];
  const navigate = useNavigate();
 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("M");
  const [dob, setDob] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [user_Type, setUser_Type] = useState("user");
  const [lastdonationdate, setLastdonationdate] = useState("");
  const [location, setLocation] = useState("");
  const [isVerifyEmailDisabled, setIsVerifyEmailDisabled] = useState(false);
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [dobError, setDobError] = useState("");
  const [bloodGroupError, setBloodGroupError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [lastDonationDateError, setLastDonationDateError] = useState("");
  const [locationError, setLocationError] = useState("");
  
 
  

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
      // Reset errors
      setFirstNameError("");
      setLastNameError("");
      setGenderError("");
      setDobError("");
      setBloodGroupError("");
      setEmailError("");
      setMobileError("");
      setLastDonationDateError("");
      setLocationError("");

      // Form validation
      let isValid = true;

      if (!firstName) {
        setFirstNameError("Please enter your first name");
        isValid = false;
      }

      if (!lastName) {
        setLastNameError("Please enter your last name");
        isValid = false;
      }

      if (!gender) {
        setGenderError("Please select your gender");
        isValid = false;
      }

      if (!dob) {
        setDobError("Please enter your date of birth");
        isValid = false;
      }

      if (!bloodGroup) {
        setBloodGroupError("Please select your blood group");
        isValid = false;
      }

      if (!email) {
        setEmailError("Please enter your email address");
        isValid = false;
      }

      if (!mobile) {
        setMobileError("Please enter your phone number");
        isValid = false;
      }

      if (!lastdonationdate) {
        setLastDonationDateError("Please enter your last donation date");
        isValid = false;
      }

      if (!location) {
        setLocationError("Please enter your location");
        isValid = false;
      }

      if (!isValid) {
        return;
      }

      setIsSubmitting(true);
      const result = await UsersignUp(firstName, lastName, gender, dob, bloodGroup, mobile, email, otp, user_Type, lastdonationdate, location);
      setIsSubmitting(false);

      if (result && result.signup === 'success') {
        notification.success({
          message: 'Registration Successful!',
          description: 'You have successfully registered. Redirecting to the login page.',
        });
        navigate('/logindonor');
      } else {
        notification.error({
          message: 'Registration Failed',
          description: 'Registration was unsuccessful. Please try again or contact support.',
        });
        navigate('/registerdonor');
      }
    } catch (error) {
      setIsSubmitting(false);
      console.log(error);
    }
  };





  // const handleDateChange = (date: any) => {
  //   setLastdonationdate(date); // Assuming date is in the format you expect
  // };
  // const handleBloodGroupChange = (value: string) => {
  //   setBloodGroup(value);
  // };


  const onGenderChange = (e: any) => {
    console.log("radio checked", e.target.value);
    setGender(e.target.value);
    setGenderError("");
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
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setFirstNameError(""); // Reset error when the user starts typing
                }}
              />
              {firstNameError && <p className="text-red-500">{firstNameError}</p>}
              <Input 
                placeholder="Last Name" 
                className="w-[210px]" 
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  setLastNameError(""); // Reset error when the user starts typing
                }}
              />
              {lastNameError && <p className="text-red-500">{lastNameError}</p>}
            </div>
            
            <div className="mt-3 pr-14 w-[100%]">
              <Input.Search
               type="email"
               placeholder="must contain @ symbol"
               value={email}
               //onChange={(e) => setEmail(e.target.value)}
               disabled={otpSent}
               onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(""); // Reset error when the user starts typing
              }}
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
       {emailError && <p className="text-red-500">{emailError}</p>}
       

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
             // onChange={(e) => setMobile(e.target.value)}
             onChange={(e) => {
              setMobile(e.target.value);
              setMobileError(""); // Reset error when the user starts typing
            }}
            />
             {mobileError && <p className="text-red-500">{mobileError}</p>}
            </div>
            <div className="flex gap-[30px] mt-3 pr-14">
              
            <Input
             type="date"
             placeholder="last donation date"
             className="w-full"
             value={lastdonationdate}
             onChange={(e) => {
              setLastdonationdate(e.target.value);
              setLastDonationDateError(""); // Reset error when the user starts typing
            }}
             //value={dayjs(lastdonationdate)}
            // value={lastdonationdate ? dayjs(lastdonationdate, 'YYYY-MM-DD') : null}
            // onChange={(date, dateString) => setLastdonationdate(dateString)}
            //  onChange={(date, dateString) => {
            //   setLastdonationdate(dateString);
            //   setLastDonationDateError(""); // Reset error when the user selects a date
            // }}
        />
        {lastDonationDateError && <p className="text-red-500">{lastDonationDateError}</p>}
           
            </div>
            <div className="flex gap-[30px] mt-3 pr-14">
              
            <Input 
                placeholder="location" 
                className="w-full"
                value={location}
                //onChange={(e) => setLocation(e.target.value)} 
                onChange={(e) => {
                  setLocation(e.target.value);
                  setLocationError(""); // Reset error when the user starts typing
                }}

              />
              {locationError && <p className="text-red-500">{locationError}</p>}
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
              {genderError && <p className="text-red-500">{genderError}</p>}
            </div>
            <div className="mt-3">
            <Input
                type="date"
                placeholder="Date of birth"
                className="w-full"
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                  setDobError(""); // Reset error when the user starts typing
               }}
                //value={dayjs(dob)}
              // onChange={(date, dateString) => setDob(dateString)}
              // onChange={(date, dateString) => {
              //   setDob(dateString);
              //   setDobError(""); // Reset error when the user selects a date
              // }}
              />
               {dobError && <p className="text-red-500">{dobError}</p>}
            </div>
            <div className="mt-3">
              <Select
                className="w-full"
                placeholder="Blood Group"
                value={bloodGroup}
                //onChange={handleBloodGroupChange}
                onChange={(value) => {
                  setBloodGroup(value);
                  setBloodGroupError(""); // Reset error when the user selects a blood group
                }}
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
              {bloodGroupError && <p className="text-red-500">{bloodGroupError}</p>}
     
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
