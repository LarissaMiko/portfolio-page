import React, { FC } from "react";
import { FaGithubSquare } from "react-icons/fa";
import "./Project.scss";

import project0 from "../../../images/project-0.jpg";
import project1 from "../../../images/project-1.jpg";
import project2 from "../../../images/project-2.jpg";
import project3 from "../../../images/project-3.jpg";

const projectImages = [project0, project1, project2, project3];

export type ProjectProps = {
  id: number;
  title: string;
  description: string;
  github: string;
  stack: string[];
};

const Project: FC<ProjectProps> = ({
  id,
  title,
  description,
  github,
  stack,
}: ProjectProps) => {
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
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          {/*<a href={url}>
            <FaShareSquare className="project-icon" />
        </a>*/}
        </div>
      </div>
    </div>
  );
};

export default Project;
