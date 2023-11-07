import React, { useState } from "react";
import Header from "./Header";
import {
  Button,
  Card,
  Checkbox,
  ConfigProvider,
  Input,
  InputNumber,
  Radio,
  Segmented,
  Select,
} from "antd";
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

const FindDonor = () => {
  const registerFields1 = ["Organization Name", "Set Password", "Phone Number"];
  const addressFields1 = ["District", "City"];
  const addressFields2 = ["Pincode", "Address"];
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const [donorType, setDonorType] =useState('Blood Donor')
  const donorsData = [
    {
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/happy-blood-donor.appspot.com/o/donorImage.jpg?alt=media&token=1942e6f7-c96e-4aa4-bc56-6aac0850b93b&_gl=1*1im66fy*_ga*MTY1MDQ3MzExMy4xNjgxODIzMTYw*_ga_CW55HF8NVT*MTY5OTM2NDM3MC44LjEuMTY5OTM2NDQxMC4yMC4wLjA.",
      name: "Suresh A",
      bloodGroup: " O-",
      distance: "1 km",
      address: "2nd street , sipcot",
    },
    {
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/happy-blood-donor.appspot.com/o/donorImage.jpg?alt=media&token=1942e6f7-c96e-4aa4-bc56-6aac0850b93b&_gl=1*1im66fy*_ga*MTY1MDQ3MzExMy4xNjgxODIzMTYw*_ga_CW55HF8NVT*MTY5OTM2NDM3MC44LjEuMTY5OTM2NDQxMC4yMC4wLjA.",
      name: "Suresh A",
      bloodGroup: " O-",
      distance: "1 km",
      address: "2nd street , sipcot",
    },
    {
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/happy-blood-donor.appspot.com/o/donorImage.jpg?alt=media&token=1942e6f7-c96e-4aa4-bc56-6aac0850b93b&_gl=1*1im66fy*_ga*MTY1MDQ3MzExMy4xNjgxODIzMTYw*_ga_CW55HF8NVT*MTY5OTM2NDM3MC44LjEuMTY5OTM2NDQxMC4yMC4wLjA.",
      name: "Suresh A",
      bloodGroup: " O-",
      distance: "1 km",
      address: "2nd street , sipcot",
    },
    {
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/happy-blood-donor.appspot.com/o/donorImage.jpg?alt=media&token=1942e6f7-c96e-4aa4-bc56-6aac0850b93b&_gl=1*1im66fy*_ga*MTY1MDQ3MzExMy4xNjgxODIzMTYw*_ga_CW55HF8NVT*MTY5OTM2NDM3MC44LjEuMTY5OTM2NDQxMC4yMC4wLjA.",
      name: "Suresh A",
      bloodGroup: " O-",
      distance: "1 km",
      address: "2nd street , sipcot",
    },
    {
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/happy-blood-donor.appspot.com/o/donorImage.jpg?alt=media&token=1942e6f7-c96e-4aa4-bc56-6aac0850b93b&_gl=1*1im66fy*_ga*MTY1MDQ3MzExMy4xNjgxODIzMTYw*_ga_CW55HF8NVT*MTY5OTM2NDM3MC44LjEuMTY5OTM2NDQxMC4yMC4wLjA.",
      name: "Suresh A",
      bloodGroup: " O-",
      distance: "1 km",
      address: "2nd street , sipcot",
    },
  ];
  const banksData = [
    {
      name:'BALAMURUGANS HOSPITALS',
      address:'24 hours multi speciality ,eggatur,chennai 630103',
      contact: '+91 XXXXXXXXXXXX',
      distance:'1 km'
    },
    {
      name:'BALAMURUGANS HOSPITALS',
      address:'24 hours multi speciality ,eggatur,chennai 630103',
      contact: '+91 XXXXXXXXXXXX',
      distance:'1 km'
    },
    {
      name:'BALAMURUGANS HOSPITALS',
      address:'24 hours multi speciality ,eggatur,chennai 630103',
      contact: '+91 XXXXXXXXXXXX',
      distance:'1 km'
    },
    {
      name:'BALAMURUGANS HOSPITALS',
      address:'24 hours multi speciality ,eggatur,chennai 630103',
      contact: '+91 XXXXXXXXXXXX',
      distance:'1 km'
    }
  ]
  const handleDonorType = (val:any) => {
    console.log('handleDonorType')
    setDonorType(val)
    console.log(donorType)
  }

  return (
    <div>
      <Header />
      <div className="pt-12 mt-12">
        <div className="p-auto m-auto w-10/12  text-center">
          <ConfigProvider
            theme={{
              token: {
                /* here is your global tokens */
                borderRadiusLG: 8,
              },
              components: {
                Segmented: {
                  /* here is your component tokens */
                  itemSelectedBg: "rgb(235, 55, 56)",
                  itemSelectedColor: "rgb(255, 255, 255)",
                  itemColor: "rgb(235, 55, 56)",
                  itemHoverColor: "rgb(235, 55, 56)",
                },
              },
            }}
          >
            <Segmented
              options={["Blood Donor", "Blood Bank"]}
              className="rounded-lg"
              value={donorType}
              onChange={(value)=>handleDonorType(value)}
            />
          </ConfigProvider>
        </div>
{donorType==='Blood Donor'?(
    <div>
    <div className="mt-8 ">
      <div className="p-auto m-auto w-10/12   bg-gray-200">
        <div className="px-12 pt-4">
        <h1>Search a Donor</h1>
        <p className="font-semibold text-md"> we are more than </p>
        </div>
        <div className="my-4 px-6 pb-4 flex justify-around gap-[5px]">
          <div>
            <Select
              className="w-[266px]"
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
          <div>
            <Select
              className="w-[266px]"
              placeholder="Location"
              options={[
                { value: "nellore", label: "Nellore" },
                { value: "tirupathi", label: "Tirupathi" },
                { value: "krishna", label: "Krishna" },
              ]}
            />
          </div>
          <div>
            <Select
              className="w-[266px]"
              placeholder="Type of service"
              options={[
                { value: "nellore", label: "Nellore" },
                { value: "tirupathi", label: "Tirupathi" },
                { value: "krishna", label: "Krishna" },
              ]}
            />
          </div>
          <div>
            <Button
              type="primary"
              className="rounded-md bg-red-500 hover:!bg-red-700 px-6 !items-center justify-center !pb-7 w-[266px]"
            >
              Find Donor
            </Button>
          </div>
        </div>
      </div>
    </div>

    <div className="my-8 ">
      <div className="flex p-auto m-auto w-9/12  text-center">
        <div className="flex flex-wrap gap-[10px]">
          {donorsData.map((card) => (
            <Card
              hoverable
              style={{ width: 366 }}
              className="rounded-2xl"
              cover={
                <div className="mt-6">
                  <div className="p-auto m-auto !w-[20%]">
                    <div></div>
                    <img src={card.imageURL} className="w-16 h-16" />
                  </div>
                </div>
              }
            >
              <div>
                <p className="text-xl font-bold mb-2 text-red-500">
                  {card.name}
                </p>
                <div className=" flex justify-between">
                  <p className="font-bold">
                    Blood Group: {card.bloodGroup}
                  </p>
                  <p className="font-bold">Distance: {card.distance}</p>
                </div>
                <div>
                  <p className="font-bold flex justify-start">
                    Address: {card.address}
                  </p>
                </div>
                <div className=" flex justify-between gap-[10px]">
                  <Button
                    type="primary"
                    className="rounded-2xl bg-white text-red-500 hover: !text-red-500 font-bold hover:!bg-white px-6 !items-center justify-center !pb-7"
                  >
                    Request details
                  </Button>
                  <Button
                    type="primary"
                    className="rounded-2xl bg-red-500 hover:!bg-red-700 px-6 !items-center justify-center !pb-7"
                  >
                    Get aproval
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </div>
):(
    <div>
        <div className="mt-8 ">
          <div className="p-auto m-auto w-10/12   bg-gray-200">
            <div className="px-12 pt-4">
            <h1>Search a Donor</h1>
            <p className="font-semibold text-md"> we are more than </p>
            </div>
            <div className="my-4 px-6 pb-4 flex justify-around gap-[5px]">
              <div>
                <Select
                  className="w-[266px]"
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
              <div>
                <Select
                  className="w-[266px]"
                  placeholder="Location"
                  options={[
                    { value: "nellore", label: "Nellore" },
                    { value: "tirupathi", label: "Tirupathi" },
                    { value: "krishna", label: "Krishna" },
                  ]}
                />
              </div>
              <div>
                <Select
                  className="w-[266px]"
                  placeholder="Type of service"
                  options={[
                    { value: "nellore", label: "Nellore" },
                    { value: "tirupathi", label: "Tirupathi" },
                    { value: "krishna", label: "Krishna" },
                  ]}
                />
              </div>
              <div>
                <Button
                  type="primary"
                  className="rounded-md bg-red-500 hover:!bg-red-700 px-6 !items-center justify-center !pb-7 w-[266px]"
                >
                  Find Donor
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8 ">
          <div className="flex p-auto m-auto w-7/12  text-center">
            <div className="flex flex-wrap gap-[20px]">
              {banksData.map((card) => (
                <Card
                  hoverable
                  style={{ width: 927 }}
                  className="rounded-2xl bg-gray-200"
                >
                  <div className="px-8">
                    <div>
                      <h4 className=" text-left">{card.name}</h4>
                      <div className="flex ">
                        <div className="w-4/6 ">
                            <div className="flex flex-col gap-[15px]">
                              <p className="text-left font-semibold">{card.address}</p>
                              <p className="text-left font-semibold"> Contact number:{card.contact}</p>
                              <p className="text-left font-bold"> Distance:{card.distance}</p>
                            </div>
                        </div>
                        <div className="w-2/6 ">
                            <div className="flex flex-col justify-between gap-[80px]">
                            <Button
                        type="primary"
                        className="rounded-md bg-red-500 hover:!bg-red-700 px-6 !items-center justify-center !pb-7"
                      >
                        Get aproval
                      </Button>
                      <Button
                        type="primary"
                        className="rounded-md bg-white text-red-500 hover: !text-red-500 font-bold hover:!bg-white px-6 !items-center justify-center !pb-7"
                      >
                        Request details
                      </Button>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        </div>
) }
        

      </div>
    </div>
  );
};

export default FindDonor;
