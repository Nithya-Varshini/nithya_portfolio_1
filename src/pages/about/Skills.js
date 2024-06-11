import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaBootstrap,
  FaNodeJs,
  
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman ,SiMysql} from "react-icons/si";
import { SiFlutter, SiFirebase, SiDart } from "react-icons/si";
import { FiServer } from "react-icons/fi";
import { AiFillRobot } from "react-icons/ai";

const Skills = ({ skill }) => {
  const icon = {
    "C++": <CgCPlusPlus />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Python: <FaPython />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Npm: <FaNpm />,
    Figma: <FaFigma />,
    Bootstrap: <FaBootstrap />,
    Postman: <SiPostman />,
    Flask: <FiServer />,
    C: <CgCPlusPlus />,
    UiPath: <AiFillRobot />,
    Flutter: <SiFlutter />,
    Firebase: <SiFirebase />,
    Dart: <SiDart />,
    Node: <FaNodeJs />,
    Mysql: <SiMysql />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
