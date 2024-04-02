import React from "react";

import Phone from "../../assets/phone.png";
import Check from "../../assets/check.png";
import MockUp from "../../assets/mockup.png";
import Couple from "../../assets/couple.png";
import Lightning from "../../assets/lightning.png";
import Mail from "../../assets/mail.png";
import LoremIpsum from "../../assets/lorem-ipsum.png";
import Tilt from "react-tilt";
import Roll from "react-reveal/Roll";

import "./styles.css";

function OurSolutions() {
  return (
    <>
      <div className="section">
       
     

        <Roll left>

        <div className="second-section">
          <div className="left-img">
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Sit enim sem id lectus at euismod enim varius urna. Aliquam amet lacus ipsum hac at imperdiet neque nisi. Pellentesque nisl nec.</p>
            <img src={Couple} />
          </div>

          <div className="section-right">
      
      

  

<div>
            <img className="text-item-img" src={Check} alt="Check Icon" />
            <div>
            <h2> Lorem </h2>
            <p className="textP">
             
            Lorem ipsum dolor sit amet consectetur. Senectus urna viverra vel morbi. Ligula congue tellus nullam sed. Sapien.
            </p>

            </div>

            </div>      


          
          </div>


        </div>
        </Roll>

      
      </div>
    </>
  );
}

export default OurSolutions;
