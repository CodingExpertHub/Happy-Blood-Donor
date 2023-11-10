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

const Aboutwwa = () => {
  return (
    <div>
        <Header />
        <div>
        <Image
              src="https://i.imgur.com/cYrkeqJ.png"
              preview={false}
            />
        </div>
        <div className="pt-12 bg-gray-800">
        <Footer />
      </div>
    </div>
  )
}

export default Aboutwwa