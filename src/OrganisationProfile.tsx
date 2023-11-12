import React from 'react';
import { Form, Input, Button, DatePicker, Select } from 'antd';
//import 'antd/dist/antd.css';  // Import Ant Design styles
import Header from './Header';
import Footer from './Footer';

const { Option } = Select;

const ProfilePage: React.FC = () => {
  const [form] = Form.useForm();

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
        <Form.Item label="First Name" name="fname" initialValue="John" rules={[{ required: true, message: 'Please enter your first name!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Last Name" name="lname" initialValue="Doe" rules={[{ required: true, message: 'Please enter your last name!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Gender" name="gender" initialValue="male" rules={[{ required: true, message: 'Please select your gender!' }]}>
          <Select>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="others">Others</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Date of Birth" name="dob" rules={[{ required: true, message: 'Please select your date of birth!' }]}>
          <DatePicker />
        </Form.Item>

        <Form.Item label="Blood Group" name="bloodgroup" initialValue="A+" rules={[{ required: true, message: 'Please enter your blood group!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Mobile" name="mobile" initialValue={1234567890} rules={[{ required: true, message: 'Please enter your mobile number!' }]}>
          <Input type="number" />
        </Form.Item>

        <Form.Item label="Email" name="email" initialValue="john.doe@example.com" rules={[{ required: true, message: 'Please enter your email!', type: 'email' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="User Type" name="user_type" initialValue="user">
          <Input disabled />
        </Form.Item>

        <Form.Item label="Last Donation Date" name="lastdonationdate" rules={[{ required: true, message: 'Please select your last donation date!' }]}>
          <DatePicker />
        </Form.Item>

        <Form.Item label="Location" name="location" initialValue="Some Location" rules={[{ required: true, message: 'Please enter your location!' }]}>
          <Input />
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
