import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import ProjectBox from "./ProjectBox";
import Phistrap from "../../images/Phistrap.png";
import plas from "../../images/plas.png";
import she from "../../images/she.png";
import soc from "../../images/soc.png";
import portfolio from "../../images/portfolio.png";
import phishing from "../../images/phishing.png";
import spam from "../../images/spam.jpg";
import weather from "../../images/weather.jpeg";
import todo from "../../images/todo.png";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        {/* <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div> */}
      </Container>
      <div>
        <div className="project">
          <ProjectBox projectPhoto={she} projectName="SheWallet" />
          <ProjectBox projectPhoto={Phistrap} projectName="PhishTrap" />
          <ProjectBox projectPhoto={plas} projectName="PlasTrack" />
          <ProjectBox projectPhoto={soc} projectName="SOC" />
          <ProjectBox projectPhoto={portfolio} projectName="Portfolio" />
        </div>
      </div>
      <Container className="About-header">
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Hobby Projects</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
      </Container>
      <div>
        <div className="project">
          <ProjectBox projectPhoto={todo} projectName="ToDo" />
          <ProjectBox projectPhoto={weather} projectName="Weather" />
          <ProjectBox projectPhoto={phishing} projectName="Phishing" />
          <ProjectBox projectPhoto={spam} projectName="Spam" />
        </div>
      </div>
    </HelmetProvider>
  );
};
