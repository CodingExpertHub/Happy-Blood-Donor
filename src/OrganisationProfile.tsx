import React, { useState, useEffect } from "react";
import { Form, Input, Button, DatePicker, Select } from 'antd';
//import 'antd/dist/antd.css';  // Import Ant Design styles
import Header from './Header';
import Footer from './Footer';
import {getOrgInfo} from './api/users';
import { useLoginData } from "./context/context";

const { Option } = Select;

const ProfilePage: React.FC = () => {
  const [form] = Form.useForm();
  const [user, setUser] = useState(null);
  const { userId, setUserId, userType, setUserType } = useLoginData();

  const [orgName, setorgName] = useState("");
  const [category, setCategory] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] =  useState("");

  const handleCategorycheck = (value: string) => {
    setCategory(value);
  };

  async function fetchUserInfoData() {
    try {
      const userInfo = await getOrgInfo(userId);
      console.log(userInfo);
      setUser(userInfo);
  
      if (userInfo) {
        setUser(userInfo);
        console.log(userInfo);
        const {
          orgname, 
          category, 
          email,  
          mobile, 
         location
        } = userInfo;
  
        setorgName((prev) => prev || orgname || "");
        setCategory((prev) => prev || category || "");
        setEmail((prev) => prev || email || "");
        setMobile((prev) => prev || mobile || "");
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



  const handleSubmit = (values: any) => {
    // Handle form submission and update data
    console.log(values);
    // You can make an API request to update the data with the values
  };

  return (
    <div>
      <Header />
      <br/><br/><br/><br/>
      <div className="p-auto m-auto w-10/12 bg-red-500">
                <p className="text-center text-white text-xl py-6">
                  Organisation Profile
                </p>
            </div><br/><br/>
      <Form
        form={form}
        name="profile-form"
        onFinish={handleSubmit}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{width:"500px", marginLeft:"300px", alignItems: 'center', justifyContent: 'center'}}
      >
        <Form.Item label="Organization"  rules={[{ required: true, message: 'Please enter your first name!' }]}>
          <Input 
           value={orgName}
           name="orgName"
           placeholder="Organization"
           onChange={(e) => setorgName(e.target.value)}
           required
          />
        </Form.Item>
        <Form.Item label="Category"   rules={[{ required: true, message: 'Please select your gender!' }]}>
          <Select
          className="w-full"
          placeholder="Category"
          value={category}
          onChange={handleCategorycheck}
          
          
          >
            <Option value="Blood Bank">Blood Bank</Option>
            <Option value="Hospitals">Hospitals</Option>
            <Option value="NGO">NGO</Option>
            <Option value="Medical Colleges">Medical Colleges</Option>
          </Select>
        </Form.Item>

      
        <Form.Item label="Mobile" name="mobile" rules={[{ required: true, message: 'Please enter your mobile number!' }]}>
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

        <Form.Item label="Location" rules={[{ required: true, message: 'Please enter your location!' }]}>
          <Input 
           placeholder="location" 
           name="location" 
           className="w-full"
           value={location}
           onChange={(e) => setLocation(e.target.value)} 
           required
          
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" style={{color:"red", border: '1px solid red',}}>
            Update Profile
          </Button>
        </Form.Item>
      </Form>
      <div className="pt-12 bg-gray-800">
        <Footer />
      </div>
    </div>
  );
};

export default ProfilePage;
