import React from "react";
import "./styles.css";
import add from "../../assets/mais.png";

function Blog() {
  return (
    <div className="app-container">
      <div className="left-container">
        <div className="lineP"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipiscing elit.
          <img
            src={add}
            alt="Add Button"
            ref={(el) =>
              el && el.scrollIntoView({ behavior: "smooth", block: "end" })
            }
          />
        </p>
        <div className="lineP"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipiscing elit.
          <img
            src={add}
            alt="Add Button"
            ref={(el) =>
              el && el.scrollIntoView({ behavior: "smooth", block: "end" })
            }
          />
        </p>
        <div className="lineP"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipiscing elit.
          <img
            src={add}
            alt="Add Button"
            ref={(el) =>
              el && el.scrollIntoView({ behavior: "smooth", block: "end" })
            }
          />
        </p>
        <div className="lineP"></div>
      </div>

      <div className="right-container">
        <h1>Lorem Ipsum Dolor Sit</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Leo tempor risus lacus nec.
          Porta sed vulputate psum dolor sit amet consectetur. Leo tempor risus
          lacus nec. Porta sed vulputa.
        </p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input type="email" placeholder="Coloque Seu Melhor E-Mail" />
          <button>Enviar</button>
        </div>

        <a href="#">Saiba Mais &rarr;</a>
      </div>
    </div>
  );
}
export default Blog;
