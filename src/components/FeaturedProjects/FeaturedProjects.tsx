import React, { FC } from "react";
import { Link } from "react-router-dom";
import FeaturedProject from "./FeaturedProject";
import Title from "../Title";
import { projects } from "../../constants/projects";
import "./FeaturedProjects.scss";

const FeaturedProjects: FC = () => {
  return (
    <section className="section feature-container">
      <Title title={"Latest Projects"} />
      <div className="section-center feature-center">
        {projects.map((project) => {
          return project.featured ? (
            <FeaturedProject key={project.id} {...project} />
          ) : (
            <></>
          );
        })}
      </div>
      <div className="link-container">
        <Link to="/projects" className="btn">
          More projects
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;
