import { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import { useNavigate} from 'react-router-dom';
//import { useHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Popover ,Image} from "antd";
import { Link } from "react-router-dom";
import Logo from "./Logo 1.svg";
import { useLoginData } from "./context/context";




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
const logincontent = (
  <div>
    <Link to="logindonor" className="!no-underline">
      <p className="text-red-500">Login as a Donor</p>
    </Link>

    <Link to="loginorganisation" className="!no-underline">
      <p className=" text-red-500">Login as a Organization</p>
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
  const navigate = useNavigate();
  const history = createBrowserHistory();
 //const history = useHistory();
  const { userId, setUserId, userType, setUserType } = useLoginData();
  //const [linkString, setLinkString] = useState("");
  const [linkString, setLinkString] = useState<string>('');


  // Get id and role from sessionStorage on page load
  useEffect(() => {
    const id = sessionStorage.getItem('userId');
    const userType = sessionStorage.getItem('usertype');
    console.log(userType)
    console.log(id)

    if (id && userType) {
      setUserId(id);
      setUserType(userType);
      
    }
    
  }, [setUserId, setUserType]);
  console.log(userType)


  // Logout handler
  const logoutHandler = () => {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('usertype');
    setUserId(null);
    setUserType(null);
    navigate('/');
  };

  // Login handler
  // const loginHandler = (userType: any) => {
  //   // Set the usertype in session storage
  //   sessionStorage.setItem('usertype', userType);
  

  //   // Set the usertype in the state
  //   setUserType(userType);
  //  // const userId = Math.random().toString(36).substring(7);
  //  // setUserId(userId);


  //   // Redirect to the appropriate page after login
  //   if (userType === 'user') {
  //     navigate('/donorprofile');
  //   } else if (userType === 'organisation') {
  //     navigate('/organisationprofile');
  //   }
  // };


  // useEffect(() => {
  //   console.log('User type updated:', userType);
  
  //   if (userType === 'user') {
  //     console.log('Redirecting to /donorprofile');
  //    // history.push('/donorprofile');
  //      navigate('/donorprofile');
  //   } else if (userType === 'organisation') {
  //     console.log('Redirecting to /organisationprofile');
  //     //history.push('/organisationprofile');
  //     navigate('/organisationprofile');
  //   }
  // }, [userType, history]);
  
  // const loginHandler = (userType: any) => {
  //   sessionStorage.setItem('usertype', userType);
  //   console.log('Logging in with userType:', userType);
  
  //   setUserType(userType);
  // };
  

  // useEffect(() => {
  //   // This block will be executed after userType is updated
  //   console.log('User type updated:', userType);

  //   // Redirect to the appropriate page after login
  //   if (userType === 'user') {
  //     console.log('Redirecting to /donorprofile');
  //     //window.location.href = '/donorprofile';
  //     history.push('/donorprofile');
  //   } else if (userType === 'organisation') {
  //     console.log('Redirecting to /organisationprofile');
  //    // window.location.href = '/organisationprofile';
  //    history.push('/organisationprofile');
  //   }
  // }, [userType]); // useEffect will run whenever userType changes

  // const loginHandler = (userType: any) => {
  //   // Set the usertype in session storage
  //   sessionStorage.setItem('usertype', userType);
  //   console.log(userType);

  //   // Set the usertype in the state
  //   setUserType(userType);
  // };

  //  // Login handler
  //  const loginHandler = (userType: any) => {
  //   // Set the usertype in session storage
  //   sessionStorage.setItem('usertype', userType);
  //   console.log(userType)

  //   // Set the usertype in the state
  //   setUserType(userType);
  //   console.log(userType)

  //   // Redirect to the appropriate page after login
  //   if (userType === "user") {
  //    // history.push('/donorprofile');
  //    window.location.href = '/donorprofile';
  //   } else if (userType === "organisation") {
  //     //history.push('/organisationprofile');
  //     window.location.href = '/organisationprofile';
  //   }
  //   console.log(userType)
  //  };


  const generateProfileContent = (
    <div>
          {/* <a 
           //onClick={() => loginHandler(userType)}
           >
            <p className="text-red-500">
              profile
            </p>
          </a> */}
          <Link to="#" className="!no-underline">
            <p className="text-red-500">Settings</p>
          </Link>
        
          <a>
            <p className="text-red-500" onClick={logoutHandler}>
              Logout
            </p>
          </a>
    </div>
  );




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
          <div>
       </div>
       {/* <div>
      {userType === 'user' || userType === 'organisation' ? (
        <Button
          type="primary"
          className="ml-8 bg-red-500 hover:!bg-red-900 px-12 !items-center justify-center !pb-7"
          onClick={() => loginHandler(userType)}
        >
          {userType === 'user' ? 'User' : 'Org'}
        </Button>
      ) : null}
    </div> */}
     {/* <div>
      <Button
        type="primary"
        className="ml-8 bg-red-500 hover:!bg-red-900 px-12 !items-center justify-center !pb-7"
        onClick={() => loginHandler(userType)}
      >
        {userType === 'user' ? 'user' : 'organisation'}
      </Button>
    </div> */}

  
      
      {userId ? (
         <Popover content={generateProfileContent}  trigger='click'>
           <Button
          
           type="primary"
           className="ml-8 bg-red-500 hover:!bg-red-900 px-12 !items-center justify-center !pb-7"
           //onClick={() => loginHandler(userType)}
         >
           Settings
         </Button>
          </Popover>

        ) : (
          <>
 
          <Popover content={content} trigger='click'>
            <Button
              type="primary"
              className="ml-8 bg-red-500 hover:!bg-red-900 px-12 !items-center justify-center !pb-7"
            >
              Register
            </Button>
          </Popover>
          <Popover content={logincontent} trigger='click'>
      <Button
        type="primary"
        className="ml-2 bg-red-500 hover:!bg-red-900 px-12 !items-center justify-center !pb-7"
      >
        Login
      </Button>
      
      </Popover>
      </>
      )}
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    
  );
};

export default Header;



