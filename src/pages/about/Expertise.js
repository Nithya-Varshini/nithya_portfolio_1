import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython,FaFigma, faFigma, } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "./Expertise.css";
import { SiFlutter, SiDart, SiFirebase } from "react-icons/si";

const labelsFirst = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Node.js",
  "Express",
  "MySQL",
  "REST API",
  "Postman",
  "Git",
  "GitHub",
];

const labelsSecond = [
  "Flutter",
  "Firebase",
  "Dart",
  "Razorpay",
  "Google Maps API",
  "Dialogflow",
  "Git",
  "GitHub",
];

const labelsThird = ["Figma", "Canva"];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I specialize in Full Stack Development, which means I can handle
              both front-end and back-end tasks. This allows me to create
              complete, seamless web applications. I use tools like HTML, CSS,
              JavaScript, and React for the front-end, and Node.js, Express, and
              MySQL for the back-end. I'm also proficient with Git and GitHub
              for version control.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <SiFlutter size="6ex" />
            <h3>Flutter Development</h3>
            <p>
              Flutter Development is one of my strong suits. I build
              cross-platform mobile apps that are fast and user-friendly. I work
              with Flutter for the framework, Firebase for backend services,
              Razorpay for payment processing, and APIs like Google Maps and
              Dialogflow to add extra features.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faFigma} size="3x" />
            <h3>UX/UI Designing</h3>
            <p>
              I’m passionate about UX/UI Design, making sure that the
              applications I develop are not only functional but also visually
              appealing and easy to use. I use Figma for design and prototyping,
              and my front-end skills in HTML, CSS, JavaScript, and Bootstrap
              help bring these designs to life.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
