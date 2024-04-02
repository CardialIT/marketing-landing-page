import React from "react";
import NavBar from "./sections/NavBar/index";
import BannerPrimary from "./sections/BannerPrimary/index";
import OurSolutions from "./sections/OurSolutions/index";
import Footer from "./sections/Footer/index";


import ReactWhatsappButton from "react-whatsapp-button";

import "./global.css";

function App() {
  return (
    <div className="container">
      <ReactWhatsappButton
        countryCode="41"
        phoneNumber="96745640" 
      />
      <NavBar />
      <BannerPrimary />

      <OurSolutions />

      {/* <OurTeam /> */}
   
      <Footer />
    </div>
  );
}

export default App;