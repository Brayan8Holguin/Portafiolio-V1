import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faServer,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
function Home() {
  return (
    <div className="container-home">
      <div className="content-about">
        <div className="img-yo">
          <img src="imagen.jpg" alt="" />
        </div>
        <div className="text-home">
          <h1>¡Hola! Soy Brayan</h1>
          <p>
            🚀 Desarrollo Full Stack en constante búsqueda de superación y
            crecimiento profesional en el mundo de la tecnología. Desde que era
            joven, siempre estuve fascinado por la manera en que la tecnología
            puede transformar nuestras vidas y mejorar la forma en que
            interactuamos con el mundo que nos rodea. Esta pasión me llevó
            naturalmente a explorar carreras en el ámbito tecnológico, y ahora
            estoy emocionado de sumergirme en el apasionante campo del
            desarrollo web como estudiante en la prestigiosa academia Soy Henry.
          </p>
        </div>
      </div>
      <div className="content-skills">
        <h2>Skills</h2>
        <div className="skills-1">
          <div className="skill">
            <FontAwesomeIcon icon={faHtml5} size="2x" />
            <p>HTML</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faCss3Alt} size="2x" />
            <p>CSS</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faJsSquare} size="2x" />
            <p>JavaScript</p>
          </div>
        </div>
        <div className="skills-2">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="2x" />
            <p>React</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faNodeJs} size="2x" />
            <p>Node.js</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size="2x" />
            <p>SQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
