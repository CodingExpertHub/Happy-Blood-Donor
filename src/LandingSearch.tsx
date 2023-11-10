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
            <p className="font-semibold text-md">  </p>
            </div>
            <div className="my-4 px-6 pb-4 flex justify-around gap-[5px]">
              <div>
                <Select
                  className="w-[266px]"
                  placeholder="Blood Group"
                  options={[
                    { value: "A+", label: "A+" },
                    { value: "A-", label: "A-" },
                    { value: "A1+", label: "A1+" },
                    { value: "A1-", label: "A1-" },
                    { value: "A1B+", label: "A1B+" },
                    { value: "A1B-", label: "A1B-" },
                    { value: "A2+", label: "A2+" },
                    { value: "A2-", label: "A2-" },
                    { value: "A2B+", label: "A2B+" },
                    { value: "A2B-", label: "A2B-" },
                    { value: "AB+", label: "AB+" },
                    { value: "AB-", label: "AB-" },
                    { value: "B+", label: "B+" },
                    { value: "B-", label: "B-" },
                    { value: "Bombay Blood Group", label: "Bombay Blood Group" },
                    { value: "INRA", label: "INRA" },
                    { value: "O+", label: "O+" },
                    { value: "O-", label: "O-" },
                    
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
                    { value: "Whole Blood", label: "Whole Blood" },
                    { value: "Red Cells", label: "Red cells" },
                    { value: "Platelets", label: "Platelets" },
                    { value: "Plasma", label: "Plasma" },
                    
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