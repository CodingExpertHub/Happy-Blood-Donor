import React, { useState, useEffect } from "react";
import { Form, Input, Button, DatePicker, Select } from 'antd';
//import 'antd/dist/antd.css';  // Import Ant Design styles
import moment from 'moment';
import dayjs from 'dayjs';
import Header from './Header';
import Footer from './Footer';
import {getUserInfo} from './api/users';
import { useLoginData } from "./context/context";

const { Option } = Select;

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState(null);
  const [form] = Form.useForm();
  const { userId, setUserId, userType, setUserType } = useLoginData();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] =  useState("");
  const [bloodGroup, setBloodGroup] = useState(""); 
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [lastdonationdate, setLastdonationdate] = useState("");
  const [location, setLocation] =  useState("");

  const handleBloodGroupChange = (value: string) => {
    setBloodGroup(value);
  };

  const handleGendercheck = (value: string) => {
    setGender(value);
  };


  async function fetchUserInfoData() {
    try {
      const userInfo = await getUserInfo(userId);
      console.log(userInfo);
      setUser(userInfo);
  
      if (userInfo) {
        setUser(userInfo);
        console.log(userInfo);
        const {
          fname,
          lname,
          gender,
          dob,
          bloodgroup, // Correct the case to match the API response
          mobile,
          email,
          lastdonationdate,
          location,
        } = userInfo;
  
        setFirstName((prev) => prev || fname || "");
         //setFirstName(fname)
         console.log(fname)
        setLastName((prev) => prev || lname || "");
        setGender((prev) => prev || gender || "");
        setDob((prev) => prev || dayjs(dob).format('YYYY-MM-DD') || ""); // Format the date correctly
        setBloodGroup((prev) => prev || bloodgroup || "");
        setEmail((prev) => prev || email || "");
        setMobile((prev) => prev || mobile || "");
        setLastdonationdate((prev) => prev || dayjs(lastdonationdate).format('YYYY-MM-DD') || ""); // Format the date correctly
        setLocation((prev) => prev || location || "");
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
    
  }
  

  

 useEffect(() => {
  const userIdData = sessionStorage.getItem('userId');
  console.log(userIdData)
  setUserId(userIdData); 
 }, [setUserId]);

 useEffect(() => {
  if (userId) {
    fetchUserInfoData();
  }
}, [userId]);


  return (
    <div>
      <Header />
      <br/><br/><br/><br/>
      <div className="p-auto m-auto w-10/12 bg-red-500">
                <p className="text-center text-white text-xl py-6">
                 Donor Profile
                </p>
            </div><br/><br/>
   {/* {user && (   */}
         
      <Form
       // form={form}
        name="profile-form"
       // onFinish={handleSubmit}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{width:"500px", marginLeft:"300px", alignItems: 'center', justifyContent: 'center'}}
      >

        <Form.Item label="First Name"   rules={[{ required: true, message: 'Please enter your first name!' }]}>
          <Input  
           value={firstName}
           name="fname"
           placeholder="First Name"
           onChange={(e) => setFirstName(e.target.value)}
           required
          />
        </Form.Item>

        <Form.Item label="Last Name"  rules={[{ required: true, message: 'Please enter your last name!' }]}>
          <Input 
           placeholder="Last name"
           name="lname" 
           value={lastName}
           onChange={(e) => setLastName(e.target.value)}
           required
          />
        </Form.Item>

        <Form.Item label="Gender"   rules={[{ required: true, message: 'Please select your gender!' }]}>
          <Select
          className="w-full"
          placeholder="Gender"
          value={gender}
          onChange={handleGendercheck}
          
          >
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="others">Others</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Date of Birth"  rules={[{ required: true, message: 'Please select your date of birth!' }]}>
          <DatePicker
         // type="date"
          placeholder="Date of birth"
          className="w-full"
         // value={dob}
          value={dayjs(dob)}
          //onChange={(e) => setDob (e.target.value)}  
          onChange={(date, dateString) => setDob(dateString)}
          />
        </Form.Item>

        <Form.Item label="Blood Group"  rules={[{ required: true, message: 'Please enter your blood group!' }]}>
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
        </Form.Item>

        <Form.Item label="Mobile"   rules={[{ required: true, message: 'Please enter your mobile number!' }]}>
          <Input 
          
           name="mobile"
           value={mobile}
           placeholder="phone number"
           pattern="[0-9]{10}"
           onChange={(e) => setMobile(e.target.value)}
           required
           />
        </Form.Item>

        <Form.Item label="Email"  rules={[{ required: true, message: 'Please enter your email!', type: 'email' }]}>
          <Input
          value={email}
          name="email" 
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          />
        </Form.Item>

        <Form.Item label="Last Donation Date"  rules={[{ required: true, message: 'Please select your last donation date!' }]}>
          <DatePicker
           //type="date"
           className="w-full"
           name="lastdonationdate"
           //value={moment(lastdonationdate)} // Convert to Dayjs here
          // onChange={(e) => setLastdonationdate(e.target.value)}
          value={dayjs(lastdonationdate)} // Convert to Dayjs object here
          //onChange={(date, dateString) => setLastdonationdate(dateString)}
          onChange={(date, dateString) => setLastdonationdate(dateString)}
 
          
          />
        </Form.Item>

        <Form.Item label="Location"  rules={[{ required: true, message: 'Please enter your location!' }]}>
          <Input 
          placeholder="location" 
          name="location" 
          className="w-full"
          value={location}
          onChange={(e) => setLocation(e.target.value)} 
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" name="submit" style={{color:"red", border: '1px solid red',}}>
            Update Profile
          </Button>
        </Form.Item>
      </Form>
       {/* )} */}
      <div className="pt-12 bg-gray-800">
        <Footer />
      </div>
    </div>
  );
};

export default ProfilePage;
