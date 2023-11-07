import React from "react";
import {Image } from "antd";
const Footer = () => {
  return (
    <div>
      <div className="w-8/12 p-auto m-auto text-center text-white border-b-2 flex">
        <div className="w-1/3">
          <p className="text-left font-bold text-2xl">Happy Blood Donor</p>
          <div className="text-left">
            <p>Ashok Nagar,</p>
            <p>Chennai , Tamil Nadu</p>
            <p>600083</p>
            <div className="flex gap-[5px]">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/happy-blood-donor.appspot.com/o/youtube-footer.svg?alt=media&token=a7145193-29f7-441c-b229-5612be9fdbfd&_gl=1*1kcnty3*_ga*MTY1MDQ3MzExMy4xNjgxODIzMTYw*_ga_CW55HF8NVT*MTY5ODk4Mzk0OC43LjEuMTY5ODk4NDExMC42MC4wLjA."
                preview={false}
                className="h-8 w-8"
              />
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/happy-blood-donor.appspot.com/o/facebook-footer.svg?alt=media&token=6e73c819-e701-4562-97fa-421db531b756&_gl=1*1ureahs*_ga*MTY1MDQ3MzExMy4xNjgxODIzMTYw*_ga_CW55HF8NVT*MTY5ODk4Mzk0OC43LjEuMTY5ODk4NDEzNC4zNi4wLjA."
                preview={false}
                className="h-4 w-4"
              />
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/happy-blood-donor.appspot.com/o/whatsapp-footer.svg?alt=media&token=a065bed6-349e-4ea0-a8f4-cd5cda6ba9ed&_gl=1*12skx4f*_ga*MTY1MDQ3MzExMy4xNjgxODIzMTYw*_ga_CW55HF8NVT*MTY5ODk4Mzk0OC43LjEuMTY5ODk4NDE1Ni4xNC4wLjA."
                preview={false}
                className="h-4 w-4"
              />
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <p className="text-left font-bold text-2xl">Company Info</p>
          <div className="text-left">
            <p>Home</p>
            <p>About</p>
            <p>Blog</p>
            <p>Info</p>
          </div>
        </div>
        <div className="w-1/6">
          <p className="text-left font-bold text-2xl">Campaign</p>
          <div className="text-left">
            <p>Marketing</p>
            <p>branding</p>
            <p>Volunteers</p>
            <p>Technical team</p>
          </div>
        </div>
        <div className="w-1/6">
          <p className="text-left font-bold text-2xl">Contact Us</p>
          <div className="text-left">
            <p>+91 8147496004</p>
            <p>info@hado.com</p>
          </div>
        </div>
      </div>
      <div className="p-auto m-auto text-white">
        <p className="text-center mt-8 pb-8">Copyright © HADO 2023</p>
      </div>
    </div>
  );
};

export default Footer;
