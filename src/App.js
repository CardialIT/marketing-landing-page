import React from "react";
import NavBar from "./sections/NavBar/index";
import BannerPrimary from "./sections/BannerPrimary/index";
import OurSolutions from "./sections/OurSolutions/index";
import Footer from "./sections/Footer/index";

import ReactWhatsappButton from "react-whatsapp-button";

import "./global.css";
import Companies from "./sections/CompaniesWorked";
import Statistics from "./sections/Statistics";
import Blog from "./sections/Blog";

function App() {
  return (
    <div className="container">
      <ReactWhatsappButton countryCode="41" phoneNumber="96745640" />
      <NavBar />
      <BannerPrimary />
      <Companies />
      <Statistics />
      <Blog />
      <OurSolutions />
      {/* <OurTeam /> */}
      <Footer />
    </div>
  );
}

export default App;
