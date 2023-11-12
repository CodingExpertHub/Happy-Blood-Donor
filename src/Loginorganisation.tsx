import React, { useState, useEffect } from "react";
import { createBrowserHistory } from 'history';
import { Card, Form, Input, Button, notification } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import RegisterDonor from "./RegisterDonor";
import {  Orglogin, OrgloginsendOTP } from "./api/authendication";
import { useLoginData } from "./context/context";


const LandingPage = () => {
    
    const history = createBrowserHistory();
    const [isError, setIsError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [email, setEmail] = useState<string>('');
    const [otp, setOtp] = useState<string>('');
    const [showOtp, setShowOtp] = useState<boolean>(false)
    const [isSendOTPDisabled, setIsSendOTPDisabled] = useState(false);
    const [isEmailCorrect, setIsEmailCorrect] = useState(false);
    const [isShowLoginButton, setIsShowLoginButton] = useState(false);
    const [isSendLoginDisabled, setIsSendLoginDisabled] = useState(false);
    //const { userId, setUserId, userType, setUserType } = useLoginData;
    const { userId, setUserId, userType, setUserType } = useLoginData();

   


    useEffect(() => {
        let timer: any ;
        if (isSubmitting) {
          timer = setTimeout(() => {
            setIsSubmitting(false);
          }, 3000); // 3 seconds delay before re-enabling the login button
        }
        return () => clearTimeout(timer);
      }, [isSubmitting]);

      const handleUserlogin = async () => {
        try {
          setIsSendLoginDisabled(true);
          const data = await Orglogin(email, otp);
          console.log(data.userData)
    
          if (data.success === true) {
            sessionStorage.setItem("userId", JSON.stringify(data.userData.user_id));
            sessionStorage.setItem("usertype", JSON.stringify(data.userData.user_type));
           
            setUserId(data.userData.user_id);
            setUserType(data.userData.user_type);
            console.log(data.userData.user_type);
            
    
            alert("Login successful!");
            
            
    
            localStorage.setItem("token", JSON.stringify(data));
            history.push("/");
            window.location.reload();
            
    
            // Reset form fields
            setEmail("");
            setOtp("");
            setIsError(false);
          } else {
            // Handle error response
            setIsError(true);
          }
        } catch (error) {
          // Handle network errors
          setIsError(true);
          console.log("Network error:", error);
        } finally {
          setIsSendLoginDisabled(false);
        }
      };

    const handleOtpSubmit = async () => {
        try {
          // Disable the button to prevent multiple clicks
          setIsSendOTPDisabled(true);
    
          const result = await OrgloginsendOTP(email);
          setIsShowLoginButton(true);

          setShowOtp(true);
    
          // Enable the button after a certain period of time (e.g., 5 seconds)
          setTimeout(() => {
            setIsSendOTPDisabled(false);
          }, 5000);
        } catch (error) {
          setIsSendOTPDisabled(false);
          console.log(error);
        }
      };


  return (
    <div>

        <Header />
        <div className="pt-12 mt-12">
            <div className="p-auto m-auto w-10/12 bg-red-500">
                <p className="text-center text-white text-xl py-6">
                 Login as a Organisation
                </p>
            </div>
            <div className="login-container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70vh' }}>
      <Card
        title="Login"
        style={{
          width: showOtp ? '400px' : '400px',
          transition: 'all 0.3s ease-in-out',
          textAlign: 'center',
          border: '2px solid #3498db',
          backgroundColor: 'linear-gradient(to right, #3498db, #6dd5fa)',
          color: '#fff',
        }}
        bordered={false}
      >
        <Form
          name="loginForm"
          onFinish={handleUserlogin}
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please enter your email!' }]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>

          {showOtp && (
            <Form.Item
              name="otp"
              rules={[{ required: true, message: 'Please enter the OTP!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="text"
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </Form.Item>
          )}

          <Form.Item>
            {!showOtp ? (
              <Button
                type="primary"
                htmlType="button" // Change this to "button" to prevent form submission
                onClick={handleOtpSubmit}
                style={{
                  width: '100%',
                  backgroundColor: '#3498db',
                  border: '1px solid #3498db',
                }}
              >
                Get OTP
              </Button>
            ) : (
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: '100%',
                  backgroundColor: '#3498db',
                  border: '1px solid #3498db',
                }}
              >
                Submit OTP
              </Button>
            )}
          </Form.Item>
        </Form>
      </Card>
    </div>
    </div>
        </div>
        <div className="pt-12 bg-gray-800">
         <Footer />
       </div>
        

    </div>
  )
}

export default LandingPage   