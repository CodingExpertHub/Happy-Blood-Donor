import React, { useState } from "react";
import Header from "./Header";
import { Button, Checkbox, Input, InputNumber, Radio, Select } from "antd";
import OtpInput from "react-otp-input";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import TextArea from "antd/es/input/TextArea";

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const monthFormat = "MM/YYYY";

const RegisterDonor = () => {
  const registerFields1 = [
    "Donor Name",
    "Set Password",
    "Email address",
    "Phone Number",
    "Get OTP",
    "Previous Donation Details",
  ];
  const registerFields2 = ["Gender", "Age", "Blood Group"];
  const addressFields1 = ["District", "City"];
  const addressFields2 = ["Pincode", "Address"];
  const [otp, setOTP] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const [gender, setGender] = useState("M");

  const onGenderChange = (e: any) => {
    console.log("radio checked", e.target.value);
    setGender(e.target.value);
  };
  const handleOTPChange = (value: any) => {
    if (/^\d*$/.test(value) && value.length <= 4) {
      setOTP(value);
    }
  };
  const handleOTPSubmit = () => {
    // Perform the OTP validation or submit the OTP as needed
    console.log("Submitted OTP:", otp);
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
              <Input placeholder="First Name" className="w-[210px]" />
              <Input placeholder="Last Name" className="w-[210px]" />
            </div>
            <div className="mt-3 pr-14">
              <Input.Password placeholder="Enter password" />
            </div>
            <div className="mt-3 pr-14">
              <Input type="email" placeholder="must contain @ symbol" />
            </div>
            <div className="mt-3 w-[89%]  border-1 rounded-md">
              <PhoneInput
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={setPhoneNumber}
                className="h-[35px] flex gap-[20px] font-light text-sm pl-4"
              />
            </div>
            <div className="mt-3 pr-14 flex gap-[78px]">
              <OtpInput
                value={otp}
                onChange={setOTP}
                numInputs={4}
                renderSeparator="&nbsp;&nbsp;"
                renderInput={(props) => (
                  <input {...props} className="border-2 !w-[26px] h-[26px]" />
                )}
              />

              <Button
                type="primary"
                className="ml-8 bg-black hover:!bg-black px-12 !items-center justify-center !pb-7"
              >
                Verify & Proceed
              </Button>
            </div>
            <div>
              <Button
                type="primary"
                className="mt-2 bg-black hover:!bg-black px-12 !items-center justify-center !pb-7"
              >
                Re-send
              </Button>
            </div>
            <div className="flex gap-[30px] mt-3 pr-14">
              <DatePicker
                format={monthFormat}
                picker="month"
                className="w-full"
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
                <Radio value={"M"}>Male</Radio>
                <Radio value={"F"}>Female</Radio>
                <Radio value={"O"}>Other</Radio>
              </Radio.Group>
            </div>
            <div className="mt-3">
              <InputNumber
                min={18}
                max={100}
                placeholder="Age"
                className="w-full"
              />
            </div>
            <div className="mt-3">
              <Select
                className="w-full"
                placeholder="Blood Group"
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
      <p className="text-xl font-bold w-10/12 p-auto m-auto my-4">Address</p>

      <div className="pb-8">
        <div className="flex p-auto m-auto w-10/12">
          <div className="w-2/12">
            {addressFields1.map((rfield1) => (
              <p className="font-semibold">{rfield1}</p>
            ))}
          </div>
          <div className="w-5/12 pr-20">
            <div>
              <Select
                className="w-full"
                placeholder="District"
                options={[
                  { value: "nellore", label: "Nellore" },
                  { value: "tirupathi", label: "Tirupathi" },
                  { value: "krishna", label: "Krishna" },
                ]}
              />
            </div>
            <div className="mt-3">
              <Input placeholder="City" className="w-full" />
            </div>
          </div>
          <div className="w-1/12">
            {addressFields2.map((rfield1) => (
              <p className="font-semibold">{rfield1}</p>
            ))}
          </div>
          <div className="w-4/12">
            <div>
              <InputNumber
                maxLength={6}
                placeholder="Pincode"
                className="w-full"
              />
            </div>
            <div className="mt-3">
              <TextArea
                rows={4}
                placeholder="Address"
                className="!resize-none"
              />
            </div>
          </div>
        </div>
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
          <Button type="primary" className='ml-8 bg-red-800 hover:!bg-red-900 px-12 !items-center justify-center !pb-7'>Register</Button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RegisterDonor;
