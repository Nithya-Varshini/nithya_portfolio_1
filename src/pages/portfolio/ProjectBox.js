import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import "./style.css";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    SheWalletName: "SheWallet",
    SheWalletDesc:
      " Developed a comprehensive digital wallet aimed at empowering women in India by providing access to essential financial services and fostering community support.",
    SheWalletGithub: "https://github.com/Nithya-Varshini/she-wallet",
    SheWalletWebsite: "",

    PhishTrapName: "PhishTrap",
    PhishTrapDesc:
      " A mobile application that identifies spam and phishing messages in SMS and emails through machine learning algorithms, providing alerts within the app.",
    PhishTrapGithub: "https://github.com/Nithya-Varshini/phistrap",
    PhishTrapWebsite: "",

    PlasTrackName: "PlasTrack",
    PlasTrackDesc:
      "A mobile app designed to gather plastic from the local area, collaborating with NGOs and offering financial incentives for the users who donate their plastic waste.",
    PlasTrackGithub: "https://github.com/Nithya-Varshini/plas_track-main",
    PlasTrackWebsite: "",

    SOCName: "SOC Application",
    SOCDesc:
      "Built an application using ELK Stack for log collection and visualization, integrating TheHive, cortex, and MISP for threat intelligence.",
    SOCGithub: "https://github.com/Nithya-Varshini/SOC-dash-master",
    SOCWebsite: "",

    PortfolioName: "Portfolio",
    PortfolioDesc:
      "Developed my portfolio using the MERN stack, which includes email services and detailed information about me. ",
    PortfolioGithub: "https://github.com/Nithya-Varshini/nithya_portfolio_1",
    PortfolioWebsite: "https://nithya-4f3e5.web.app/",

    ToDoName: "To-Do Application",
    ToDoDesc:
      "Developed a to-do list application to streamline task management and boost productivity. This intuitive app allows users to add, edit, and delete tasks and mark tasks as complete. ",
    ToDoGithub: "https://github.com/Nithya-Varshini/task-manager",
    ToDoWebsite: "https://to-do-list-a5858.web.app/",

    WeatherName: "Weather Application",
    WeatherDesc:
      "The app delivers current weather conditions through an intuitive interface, with features like location-based weather updates and forecasts.",
    WeatherGithub: "https://github.com/Nithya-Varshini/weather-app.github.io",
    WeatherWebsite: "https://weather-app24.web.app/",

    PhishingName: "Phishing URL Detection",
    PhishingDesc:
      " Leveraging advanced algorithms and feature engineering, this model analyzes website URLs and content to identify suspicious patterns and behaviors.",
    PhishingGithub:
      "https://github.com/Nithya-Varshini/Phishing-Website-Detection",
    PhishingWebsite: "",

    SpamName: "Spam Mail Detection",
    SpamDesc:
      "Implemented a sophisticated spam mail detection system using machine learning algorithms. This system efficiently analyzes email content, sender information, and metadata to classify incoming emails as either legitimate or spam. ",
    SpamGithub: "https://github.com/Nithya-Varshini/spam_mail_detection",
    SpamWebsite: "",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{desc[projectName + "Name"]}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        {desc[projectName + "Website"] && (
          <a
            style={{ display: show }}
            href={desc[projectName + "Website"]}
            target="_blank"
          >
            <button className="projectbtn">
              <CgFileDocument /> Demo
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
