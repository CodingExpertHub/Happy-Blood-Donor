import React from "react";
import "tailwindcss/tailwind.css";
import { Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./LandingPage";
import RegisterDonor from "./RegisterDonor";
import RegisterOrganization from "./RegisterOrganization";
import FindDonor from "./FindDonor";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/registerdonor" element={ <RegisterDonor/> } />
        <Route path="/registerorganization" element={ <RegisterOrganization/> } />
        <Route path="/finddonor" element={ <FindDonor/> } />
      </Routes>
    </div>
  );
};

export default App;
