import React, { FC } from "react";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import { projectType } from "../../types/pagetypes";

import project0 from "../../images/project-0.jpg";
import project1 from "../../images/project-1.jpg";
import project2 from "../../images/project-2.jpg";
import project3 from "../../images/project-3.jpg";
import project4 from "../../images/project-4.jpg";
import project5 from "../../images/project-5.jpg";

const projectImages = [
  project0,
  project1,
  project2,
  project3,
  project4,
  project5,
];

const FeaturedProject: FC<projectType> = ({
  id,
  title,
  description,
  github,
  stack,
  url,
  featured,
}: projectType) => {
  return (
    <div className="feature">
      <article>
        <img
          src={projectImages[id]}
          alt="project"
          className={`feature-img`}
        ></img>
        <div className="feature-card">
          <h4>{title}</h4>

          <div className="feature-footer">
            <div className="project-stack">
              {stack.map((item) => {
                return <span>{item}</span>;
              })}
            </div>
            <div className="project-links">
              {github ? (
                <a href={github} target="_blank" rel="noreferrer">
                  <FaGithubSquare className="feature-icon" />
                </a>
              ) : (
                <></>
              )}
              {url ? (
                <a href={url} target="_blank" rel="noreferrer">
                  <FaShareSquare className="feature-icon" />
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FeaturedProject;
