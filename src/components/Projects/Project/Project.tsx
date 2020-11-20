import React, { FC } from "react";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import "./Project.scss";
import { projectType } from "../../../types/project";

import project0 from "../../../images/project-0.jpg";
import project1 from "../../../images/project-1.jpg";
import project2 from "../../../images/project-2.jpg";
import project3 from "../../../images/project-3.jpg";
import project4 from "../../../images/project-4.jpg";
import project5 from "../../../images/project-5.jpg";

const projectImages = [
  project0,
  project1,
  project2,
  project3,
  project4,
  project5,
];

const Project: FC<projectType> = ({
  id,
  title,
  description,
  github,
  stack,
  url,
  featured,
}: projectType) => {
  return (
    <div className="project">
      <img src={projectImages[id]} alt="project" className="project-img"></img>
      <div className="project-img project-img-overlay"></div>
      <div className="project-info">
        <span className="project-number">0{id + 1}.</span>
        <h3>{title || "default title"}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map((item) => {
            return <span>{item}</span>;
          })}
        </div>
        <div className="project-links">
          {github ? (
            <a href={github} target="_blank" rel="noreferrer">
              <FaGithubSquare className="project-icon" />
            </a>
          ) : (
            <></>
          )}
          {url ? (
            <a href={url} target="_blank" rel="noreferrer">
              <FaShareSquare className="project-icon" />
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
