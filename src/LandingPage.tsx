import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import { Avatar, Button, Card, Image, Rate } from "antd";
import styled from "styled-components";
import { UserOutlined, WhatsAppOutlined } from "@ant-design/icons";
import Footer from "./Footer";
import RegisterDonor from "./RegisterDonor";
import RegisterOrganization from "./RegisterOrganization";
import { Link } from "react-router-dom";
import LandingSearch from './LandingSearch';

const LandingPage = () => {
  return (
    <div>
        <Header />
      <div className=" flex">
        <div className="w-7/12 justify-center items-center p-auto m-auto">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-purple-500 mb-6">
            Happy Donors Smile For Saves Lives, Just Ask
          </h1>
          <p className="text-gray-600">
            A simple smile accompanies the profound impact of saving lives
            through blood donation—ask any happy donor, and they'll tell you
            it's a rewarding journey of compassion and community
          </p>
          <div className="flex gap-[50px]">
          <Link to="registerdonor" className='cursor-pointer'>
          <Button
              type="primary"
              className="ml-2 bg-red-500 rounded-2xl hover:!bg-red-900 px-12 !items-center justify-center !pb-7"
            >
              <div className="flex">
                <div className="mr-4">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/happy-blood-donor.appspot.com/o/Blooddrop.svg?alt=media&token=ba793723-d981-430a-8101-27745e8f0c9e&_gl=1*2osc2j*_ga*MTY1MDQ3MzExMy4xNjgxODIzMTYw*_ga_CW55HF8NVT*MTY5ODg0NTUzMS40LjEuMTY5ODg0NTk0NC4zLjAuMA.."
                    preview={false}
                  />
                </div>
                <div className="-pb-2">Be a Donor</div>
              </div>
            </Button>
          </Link>
          <Link to="finddonor">
          <Button
              type="primary"
              className="ml-2 bg-red-500 rounded-2xl hover:!bg-red-900 px-12 !items-center justify-center !pb-7"
            >
              <div className="flex">
                <div className="mr-4">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/happy-blood-donor.appspot.com/o/Blooddrop.svg?alt=media&token=ba793723-d981-430a-8101-27745e8f0c9e&_gl=1*2osc2j*_ga*MTY1MDQ3MzExMy4xNjgxODIzMTYw*_ga_CW55HF8NVT*MTY5ODg0NTUzMS40LjEuMTY5ODg0NTk0NC4zLjAuMA.."
                    preview={false}
                  />
                </div>
                <div className="-pb-2">Find a Donor</div>
              </div>
            </Button>
          </Link>
            
            
          </div>
        </div>

        <div className="mt-20 w-4/12">
          <Image src="./HomeSide1.png" preview={false} />
        </div>
      </div>
      {/* <div className="mt-6 py-12">
        <div className=" p-auto m-auto  w-8/12">
          <div className="mx-[38%] mb-8">
            <p className="font-bold text-2xl">Partner & Friend</p>
          </div>
          <div className="flex gap-[30px]">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/happy-blood-donor.appspot.com/o/Apollo.png?alt=media&token=329d9adf-4b30-4c12-ba1c-5f7a293ae220&_gl=1*12vxeu0*_ga*MTY1MDQ3MzExMy4xNjgxODIzMTYw*_ga_CW55HF8NVT*MTY5ODg0NTUzMS40LjEuMTY5ODg0NzE0NC42MC4wLjA."
              preview={false}
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/happy-blood-donor.appspot.com/o/Vijay.png?alt=media&token=87d88693-da04-46c2-9a61-1a09214c717f&_gl=1*1ybx8d4*_ga*MTY1MDQ3MzExMy4xNjgxODIzMTYw*_ga_CW55HF8NVT*MTY5ODg0NTUzMS40LjEuMTY5ODg0NzQzOC42MC4wLjA."
              preview={false}
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/happy-blood-donor.appspot.com/o/Sankara.png?alt=media&token=2f461ea2-9831-4362-aa84-c5bc486b8aa3&_gl=1*176pfk1*_ga*MTY1MDQ3MzExMy4xNjgxODIzMTYw*_ga_CW55HF8NVT*MTY5ODg0NTUzMS40LjEuMTY5ODg0NzQ3OC4yMC4wLjA."
              preview={false}
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/happy-blood-donor.appspot.com/o/Mayapada.png?alt=media&token=de3a3149-d31e-480a-86ba-20240fb90fd0&_gl=1*t94dai*_ga*MTY1MDQ3MzExMy4xNjgxODIzMTYw*_ga_CW55HF8NVT*MTY5ODg0NTUzMS40LjEuMTY5ODg0NzgwNi41Mi4wLjA."
              preview={false}
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/happy-blood-donor.appspot.com/o/Medway.png?alt=media&token=37fd576d-c0f4-4322-8335-93e2f5d8be54&_gl=1*bl1o35*_ga*MTY1MDQ3MzExMy4xNjgxODIzMTYw*_ga_CW55HF8NVT*MTY5ODg0NTUzMS40LjEuMTY5ODg0NzU0OS4zNi4wLjA."
              preview={false}
            />
          </div>
        </div>
      </div> */}
      <LandingSearch />
      <div className=" py-12">
        <div className=" p-auto m-auto  w-8/12">
          <div className="mx-[38%] mb-8">
            <p className="font-bold text-2xl">
              Why Donate <span className="text-red-500">Blood ?</span>
            </p>
          </div>
          <div className="flex gap-[20px]">
            <p className="text-gray-600 w-9/12 m-auto p-auto text-justify">
              Donating blood saves lives by providing a critical resource for
              medical treatments, surgeries, and emergencies. A single donation
              can impact multiple patients, making it a simple yet powerful way
              to contribute to the well-being of others
            </p>
          </div>
        </div>
      </div>
      <div className=" py-12">
        <div className=" p-auto m-auto  w-8/12">
          <div className=" flex gap-[30px] p-auto m-auto">
            <Card
              hoverable
              style={{ width: 346 }}
              className="rounded-2xl"
              cover={
                <div className="pt-6 pl-6 !w-[70%]">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/happy-blood-donor.appspot.com/o/RedBlood.png?alt=media&token=c2718b6f-92c6-4577-b382-b8167b38d23f&_gl=1*1ujnnic*_ga*MTY1MDQ3MzExMy4xNjgxODIzMTYw*_ga_CW55HF8NVT*MTY5ODg1MjU5My41LjEuMTY5ODg1MjcxMC42MC4wLjA."
                    className="w-16 h-16"
                  />
                </div>
              }
            >
              <div>
                <p className="text-xl font-bold mb-2">Become a Donor</p>
                <p className="text-gray-500 mb-4 text-justify">
                  Become a blood donor and be the hero someone desperately
                  needs. Your donation can save lives.{" "}
                </p>
                <Button
                  type="primary"
                  className="rounded-2xl bg-red-500 hover:!bg-red-700 px-12 !items-center justify-center !pb-7"
                >
                  Learn More
                </Button>
              </div>
            </Card>
            <Card
              hoverable
              style={{ width: 346 }}
              className="rounded-2xl"
              cover={
                <div className="pt-6 pl-6 !w-[70%]">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/happy-blood-donor.appspot.com/o/GreenHeart.png?alt=media&token=71b0ecaf-1c8a-465c-ab3e-588495562541&_gl=1*1xd3rl8*_ga*MTY1MDQ3MzExMy4xNjgxODIzMTYw*_ga_CW55HF8NVT*MTY5ODg1MjU5My41LjEuMTY5ODg1MzE1My42MC4wLjA."
                    className="w-16 h-16"
                  />
                </div>
              }
            >
              <div>
                <p className="text-xl font-bold mb-2">Find a donor</p>
                <p className="text-gray-500 mb-4 text-justify">
                  We urgently need a blood donor! Your willingness to donate can
                  be a lifeline for someone in a critical situation.{" "}
                </p>
                <Button
                  type="primary"
                  className="rounded-2xl bg-red-500 hover:!bg-red-700 px-12 !items-center justify-center !pb-7"
                >
                  Learn More
                </Button>
              </div>
            </Card>
            <Card
              hoverable
              style={{ width: 346 }}
              className="rounded-2xl"
              cover={
                <div className="pt-6 pl-6 !w-[70%]">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/happy-blood-donor.appspot.com/o/Injection.png?alt=media&token=3c90960d-1198-4c68-87d4-c9bdbcc923e4&_gl=1*s18b7t*_ga*MTY1MDQ3MzExMy4xNjgxODIzMTYw*_ga_CW55HF8NVT*MTY5ODg1MjU5My41LjEuMTY5ODg1MzMzMS42MC4wLjA."
                    className="w-16 h-16"
                  />
                </div>
              }
            >
              <div>
                <p className="text-xl font-bold mb-2">Blood Drives</p>
                <p className="text-gray-500 mb-4 text-justify">
                  Be a part of our upcoming blood drive and contribute to saving
                  lives. Your donation can make a significant impact.{" "}
                </p>
                <Button
                  type="primary"
                  className="rounded-2xl bg-red-500 hover:!bg-red-700 px-12 !items-center justify-center !pb-7"
                >
                  Learn More
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className=" py-12">
        <div className="flex p-auto m-auto w-10/12">
          <div className="w-1/2">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/happy-blood-donor.appspot.com/o/Side1.png?alt=media&token=871617fe-e10d-4475-ade5-f76d8b0efcae&_gl=1*1b0rmh0*_ga*MTY1MDQ3MzExMy4xNjgxODIzMTYw*_ga_CW55HF8NVT*MTY5ODg1MjU5My41LjEuMTY5ODg1MzYyMy40Mi4wLjA."
              preview={false}
              className="px-8 rounded-2xl drop-shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-[10px] w-1/2">
            <div>
              <p className="text-xl font-bold">
                Who we <span className="text-red-500">Are</span> ?
              </p>
              <p className="text-justify text-gray-500">
                Collaborate with healthcare professionals, government agencies,
                non-profit organizations, and local communities to strengthen
                the overall healthcare system.
              </p>
            </div>
            <div>
              <p className="text-xl font-bold">Our Mission</p>
              <p className="text-justify  text-gray-500">
                To save lives by ensuring a safe and ample blood supply for
                patients in need, fostering community engagement, and promoting
                the importance of regular blood donation.
              </p>
            </div>
            <div>
              <p className="text-xl font-bold">Our Vision</p>
              <p className="text-justify text-gray-500">
                To be a leading force in promoting a culture of voluntary blood
                donation, ensuring a robust and safe blood supply system, and
                ultimately contributing to a healthier and more resilient
                community.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-12">
        <div className="flex p-auto m-auto w-8/12">
          <div className=" w-1/2">
            <div>
              <p className="text-xl font-bold">
                How much shortage of blood & How we usage of blood
              </p>
              <p className="text-justify text-gray-500 mb-6">
                To solve this shortage, we are raising awareness and urging
                individuals to donate blood: “All types are needed now,
                especially types O positive and O negative, as well as platelet
                donations, to help reverse this national blood crisis,” wrote
                the American Red Cross in a press release.
              </p>
              <Button
                type="primary"
                className="rounded-2xl bg-red-500 hover:!bg-red-700 px-12 !items-center justify-center !pb-7"
              >
                <span>
                  <WhatsAppOutlined className="text-white mr-2" />
                </span>
                Learn More
              </Button>
            </div>
          </div>
          <div className="w-1/2 justify-end flex">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/happy-blood-donor.appspot.com/o/Side2.png?alt=media&token=8fe66d85-ec93-4981-9ac7-2e186448da9e&_gl=1*1pz1jj4*_ga*MTY1MDQ3MzExMy4xNjgxODIzMTYw*_ga_CW55HF8NVT*MTY5ODg1MjU5My41LjEuMTY5ODg1Mzc0MS42MC4wLjA."
              preview={false}
              className="rounded-2xl drop-shadow-lg w-[518px] h-[510px]"
            />
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="border-2 w-10/12 p-auto m-auto rounded-2xl py-6 bg-gradient-to-r from-red-700 via-red-400 to-violet-400">
          <div className="p-auto m-auto w-3/12 text-2xl text-white font-bold">
            Become a blood donator Be a life Line , Donate Blood
          </div>
          <div className="p-auto m-auto w-6/12 text-white mt-4 text-center">
            Any healthy adult, both male and female, can donate blood. Men can
            donate safely once in every three months while women can donate
            every four months. Donor should be in the age group of 18 to 65
            years
          </div>
          <div className="p-auto m-auto w-5/12 text-2xl text-white font-bold flex gap-[20px] mt-4 justify-center">
            <Button className="bg-transparent rounded-2xl text-white border-2 border-white hover:!bg-transparent hover:!border-white hover:text-white px-4 !items-center justify-center !pb-7">
              <div className="flex">
                <div className="mr-2">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/happy-blood-donor.appspot.com/o/calendar.svg?alt=media&token=2172fbc3-c118-4d66-b6b5-6d3ee18ba041&_gl=1*gpc03v*_ga*MTY1MDQ3MzExMy4xNjgxODIzMTYw*_ga_CW55HF8NVT*MTY5ODkzNDc1MS42LjEuMTY5ODkzODEyNC42MC4wLjA."
                    preview={false}
                  />
                </div>
                <div className="-pb-2">Check Availability</div>
              </div>
            </Button>

            <Button className="bg-white rounded-2xl text-red-500 border-2 border-white hover:!bg-white hover:!border-white hover:!text-red-500 px-4 !items-center justify-center !pb-7">
              <div className="flex">
                <div className="mr-2">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/happy-blood-donor.appspot.com/o/redwhatsapp.svg?alt=media&token=f359357f-ff33-44e3-abd9-d63a6c023846&_gl=1*1tydorh*_ga*MTY1MDQ3MzExMy4xNjgxODIzMTYw*_ga_CW55HF8NVT*MTY5ODkzNDc1MS42LjEuMTY5ODkzODM2Ni42MC4wLjA."
                    preview={false}
                  />
                </div>
                <div className="-pb-2 font-semibold">Contact us</div>
              </div>
            </Button>
          </div>
          <div></div>
        </div>
      </div>
      <div className="py-12">
        <div className="w-10/12 p-auto m-auto py-6 ">
          <div className="text-center font-bold">
            <p className="text-red-500 text-2xl">Testimonials</p>
          </div>
          <div className="text-center font-bold mt-4">
            <p className="text-2xl">What our Customer Says</p>
          </div>
          <div className="flex px-12">
            <div className="w-1/2">
              <Card className="m-4 rounded-2xl" hoverable>
                <p className="text-gray-500">
                  Click edit button to change this text. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                  ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <div className="flex gap-[10px]">
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                  />
                  <Rate allowHalf defaultValue={5} className="mt-1" />
                </div>
              </Card>
              <Card className="m-4 rounded-2xl" hoverable>
                <p className="text-gray-500">
                  Click edit button to change this text. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                  ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <div className="flex gap-[10px]">
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                  />
                  <Rate allowHalf defaultValue={5} className="mt-1" />
                </div>
              </Card>
            </div>
            <div className="w-1/2">
              <Card className="m-4 rounded-2xl" hoverable>
                <p className="text-gray-500">
                  Click edit button to change this text. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                  ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <div className="flex gap-[10px]">
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                  />
                  <Rate allowHalf defaultValue={5} className="mt-1" />
                </div>
              </Card>
              <Card className="m-4 rounded-2xl" hoverable>
                <p className="text-gray-500">
                  Click edit button to change this text. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                  ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <div className="flex gap-[10px]">
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                  />
                  <Rate allowHalf defaultValue={5} className="mt-1" />
                </div>
              </Card>
            </div>
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