import Select from 'antd/es/select'
import React from 'react'
import {
    Button
  } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
const LandingSearch = () => {
  return (
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
  )
}

export default LandingSearch