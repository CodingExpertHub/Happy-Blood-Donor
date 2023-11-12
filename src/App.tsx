import React from "react";
import "tailwindcss/tailwind.css";
import { Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./LandingPage";
import RegisterDonor from "./RegisterDonor";
import RegisterOrganization from "./RegisterOrganization";
import FindDonor from "./FindDonor";
import Vision from "./vision";
import Aboutwwa from "./Aboutwwa";
import Contactus from "./Contactus";
import Logindonor from "./Logindonor";
import Donorprofile from "./DonorProfile";
import OrganisationProfile from "./OrganisationProfile";
import LoginOrganisation from "./Loginorganisation";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/registerdonor" element={ <RegisterDonor/> } />
        <Route path="/logindonor" element={ <Logindonor/> } />
        <Route path="/registerorganization" element={ <RegisterOrganization/> } />
        <Route path="/loginorganisation" element={ <LoginOrganisation/> } />
        <Route path="/finddonor" element={ <FindDonor/> } />
        <Route path="/aboutus" element={ <Aboutwwa/> } />
        <Route path="/vision" element={ <Vision/> } />
        <Route path="/contactus" element={ < Contactus/> } />
        <Route path="/donorprofile" element={<Donorprofile/>} />
        <Route path="/organisationprofile" element={<OrganisationProfile/>} />
        
      </Routes>
    </div>
  );
};

export default App;
