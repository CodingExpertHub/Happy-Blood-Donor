import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Popover ,Image} from "antd";
import { Link } from "react-router-dom";
import Logo from "./Logo 1.svg";


const content = (
  <div>
    <Link to="registerdonor" className="!no-underline">
      <p className="text-red-500">Register as a Donor</p>
    </Link>

    <Link to="registerorganization" className="!no-underline">
      <p className=" text-red-500">Register as a Organization</p>
    </Link>
  </div>
  
);
const aboutcontent = (
  <div>
    <Link to="aboutus" className="!no-underline">
      <p className="text-red-500">Who we Are</p>
    </Link>

    <Link to="vision" className="!no-underline">
      <p className=" text-red-500">Vision & Mission</p>
    </Link>

    <Link to="/" className="!no-underline">
      <p className=" text-red-500">Board Members</p>
    </Link>
  </div>
  
);

const servicemenu = (
  <div>
    <Link to="#" className="!no-underline">
      <p className="text-red-500">Donor Registration</p>
    </Link>

    <Link to="#" className="!no-underline">
      <p className=" text-red-500">Blood bank & Organizations</p>
    </Link>

    <Link to="#" className="!no-underline">
      <p className=" text-red-500"> Medical College</p>
    </Link>

    <Link to="#" className="!no-underline">
      <p className=" text-red-500"> NGO</p>
    </Link>
  </div>
  
);

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary !w-full !bg-white -pr-0"
      fixed="top"
    >
      <Image
    style={{ marginLeft:'60px', height:'70px' }}
         src={Logo}
         />
      <Container className="!-mx-0 flex justify-between items-center !w-screen">
        <div className=" w-[50%] ml-8">
          <Navbar.Brand href="#home" className="font-bold !text-red-500 @font-family: -Sniglet; "  >
            {/*<div style={{color: '#EB3738', fontSize: 16, fontFamily: 'Sniglet', fontWeight: '800', wordWrap: 'break-word'}}>
           
          </div>*/}
            HAPPY DONORS
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div>
            <Nav className="me-auto flex gap-[30px]">
              <Nav.Link
                href="/"
                className="text-black hover:!text-red-500 hover:font-semibold"
              >
                Home
              </Nav.Link>
              <Popover content={aboutcontent} trigger='click'>
              <Nav.Link
                href="#link"
                className="text-black hover:!text-red-500 hover:font-semibold"
              >
                About Us
              </Nav.Link>
              </Popover>
              <Popover content={servicemenu} trigger='click'>
              <Nav.Link
                href="/"
                className="text-black hover:!text-red-500 hover:font-semibold"
              >
                Services
              </Nav.Link>
              </Popover>
              <Nav.Link
                href="contactus"
                className="text-black hover:!text-red-500 hover:font-semibold"
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </div>
          <Popover content={content} trigger='click'>
            <Button
              type="primary"
              className="ml-8 bg-red-500 hover:!bg-red-900 px-12 !items-center justify-center !pb-7"
            >
              Register
            </Button>
          </Popover>
        </Navbar.Collapse>
      </Container>
      <Button
        type="primary"
        className="ml-2 bg-red-500 hover:!bg-red-900 px-12 !items-center justify-center !pb-7"
      >
        Login
      </Button>
    </Navbar>
  );
};

export default Header;



