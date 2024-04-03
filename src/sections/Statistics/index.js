import React from "react";
import "./styles.css";

function Statistics() {
  return (
    <div className="statistics-container">
      <div className="statistics-left  backgroundStatistics">
        <div className="statistic">
          <h1>245%</h1>
          <p>More revenues for the brand</p>
        </div>
        <div className="statistic">
          <h1>50+</h1>
          <p>Brands trust us</p>
        </div>
      </div>
      <div className="statistics-right">
        <div className="statistic ">
          <h1>130K+</h1>
          <p>Audiences reached</p>
        </div>
        <div className="statistic">
          <h1>24+</h1>
          <p>Worldwide Awards</p>
        </div>
      </div>

      <div className="textStatistics backgroundText">
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          animi voluptate esse eveniet velit veritatis fugit nobis excepturi
          neque sit laboriosam fugiat corrupti iste iure, minus, quos laudantium
          repudiandae officiis. Ullam nulla labore quisquam voluptatum porro
        </p>
        <a href="">Saiba Mais →</a>
      </div>
    </div>
  );
}

export default Statistics;
