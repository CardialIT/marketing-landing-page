import React from "react";
import "./styles.css";
import { FiSend } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TypeAnimation from "react-type-animation";
import Tilt from "react-tilt";
import bannerPrimaryImg from "../../assets/banner-primary.png";

function Highlights() {
  return (
    <div className="page-container">
      <div className="side-left">
        <div className="container-title-animate">
          <h1 className="title-banner">
            Alcance novos horizontes com nossa estratégia digital afiada.
          </h1>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur. Consequat augue quam in ut.
          Elementum nisl volutpat tempor.
        </p>

        <div className="div-email">
          <input
            className="input-email"
            placeholder="Insira seu melhor e-mail"
          />
          {/* <Tilt
        className="tilt"
        options={{ max: 25 }}
        style={{ height: 50, width: 250 }}
      > */}
          <button>Enviar</button>
          {/* </Tilt> */}
        </div>
      </div>

      <div className="side-right">
        <img src={bannerPrimaryImg} alt="Banner" />
      </div>
    </div>
  );
}

export default Highlights;
