import React from "react";
import Check from "../../assets/check.png";
import Xadrez from "../../assets/xadrez.png"
import Alvo from "../../assets/alvo.png"
import Regua from "../../assets/regua.png"
import Couple from "../../assets/couple.png"
import Roll from "react-reveal/Roll";
import "./styles.css";

function OurSolutions() {
  return (
    <>

        <Roll left>

        <div className="second-section">
        
          <div className="left-section">
            <div className="left-section-content">
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Sit enim sem id lectus at euismod enim varius urna. Aliquam amet lacus ipsum hac at imperdiet neque nisi. Pellentesque nisl nec.</p>
            </div>
            <img src={Couple} />
          </div>

<div className="right-section">
           
           <div className="right-section-values">
            <img className="text-item-img" src={Check} alt="Check Icon" />
            <div>
            <h2> Lorem </h2>
            <p className="textP">
             
            Lorem ipsum dolor sit amet consectetur. Senectus urna viverra vel morbi. Ligula congue tellus nullam sed. Sapien.
            </p>

            </div>

            </div>    

                 <div className="right-section-values">
            <img  src={Regua} alt="Check Icon" />
            <div>
            <h2> Lorem </h2>
            <p>
             
            Lorem ipsum dolor sit amet consectetur. Senectus urna viverra vel morbi. Ligula congue tellus nullam sed. Sapien.
            </p>

            </div>

            </div>      

            
            <div className="right-section-values">
            <img src={Xadrez} alt="Check Icon" />
            <div>
            <h2> Lorem </h2>
            <p >
             
            Lorem ipsum dolor sit amet consectetur. Senectus urna viverra vel morbi. Ligula congue tellus nullam sed. Sapien.
            </p>

            </div>

            </div>   

            <div className="right-section-values">
            <img src={Alvo} alt="Check Icon" />
            <div>
            <h2> Lorem </h2>
            <p >
             
            Lorem ipsum dolor sit amet consectetur. Senectus urna viverra vel morbi. Ligula congue tellus nullam sed. Sapien.
            </p>

            </div>

            </div>   

            </div>
          
          </div>


    
        </Roll>

      
=
    </>
  );
}

export default OurSolutions;
