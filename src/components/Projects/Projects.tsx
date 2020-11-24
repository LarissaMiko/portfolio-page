import React, { FC } from "react";
import Project from "./Project/Project";
import Title from "../Title";
import { projects } from "../../constants/projects";
import "./Projects.scss";

const Projects: FC = () => {
  return (
    <section className="section projects">
      <Title title={"Recent Projects"} />
      <div className="section-center projects-center">
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
