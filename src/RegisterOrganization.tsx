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

const RegisterOrganization = () => {
  const registerFields1 = [
    "Organization Name",
    "Set Password",
    "Phone Number",
  ];
  const addressFields1 = ["District", "City"];
  const addressFields2 = ["Pincode", "Address"];
  const [phoneNumber, setPhoneNumber] = useState<any>();

  return (
    <div>
      <Header />
      <div className="pt-12 mt-12">
        <div className="p-auto m-auto w-10/12 bg-red-500">
          <p className="text-center text-white text-xl py-6">
            Register as an Organization
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
            <div className="w-[89%]">
              <Input placeholder="Full Name" className="w-full" />
            </div>
            <div className="mt-3 pr-14">
              <Input.Password placeholder="Enter password" />
            </div>
            <div className="mt-3 w-[89%] rounded-md">
            <InputNumber
                placeholder="Phone Number"
                className="w-full"
                controls={false}
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
              <p className="font-semibold mb-4">{rfield1}</p>
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
              <p className="font-semibold mb-4">{rfield1}</p>
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
            <Button
              type="primary"
              className="ml-8 bg-red-800 hover:!bg-red-900 px-12 !items-center justify-center !pb-7"
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterOrganization;
