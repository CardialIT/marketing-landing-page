import React from "react";
import "./styles.css";
import spotifyLogo from "../../assets/spotify-logo.svg";
import googleLogo from "../../assets/google-books-logo-2015.svg";
import uberLogo from "../../assets/uber-2.svg";
import microsoftLogo from "../../assets/microsoft-6.svg";
import shopifyLogo from "../../assets/shopify-logo.svg";
import evernoteLogo from "../../assets/evernote.svg";
import adobeLogo from "../../assets/adobe-44195.svg";
import mailLogo from "../../assets/paypal-3.svg";
import amazonLogo from "../../assets/logo-amazon.svg";
import asanaLogo from "../../assets/asana-1.svg";

function Companies() {
  const companies1 = [
    { name: "Spotify", logo: spotifyLogo },
    { name: "Google", logo: googleLogo },
    { name: "Uber", logo: uberLogo },
    { name: "Microsoft", logo: microsoftLogo },
    { name: "Shopify", logo: shopifyLogo },
  ];
  const companies2 = [
    { name: "Evernote", logo: evernoteLogo },
    { name: "Adobe", logo: adobeLogo },
    { name: "PayPal", logo: mailLogo },
    { name: "Amazon", logo: amazonLogo },
    { name: "Asana", logo: asanaLogo },
  ];

  return (
    <div className="companies-container">
      <h1>Empresas com as quais trabalhamos</h1>
      <div className="logos-row">
        {companies1.map((company) => (
          <img
            key={company.name}
            src={company.logo}
            alt={`${company.name} logo`}
          />
        ))}
      </div>
      <div className="logos-row">
        {companies2.map((company) => (
          <img
            key={company.name}
            src={company.logo}
            alt={`${company.name} logo`}
          />
        ))}
      </div>
    </div>
  );
}
export default Companies;
