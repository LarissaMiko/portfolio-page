import React, { FC } from "react";
import Project from "./Project/Project";
import Title from "../Title";

import "./Projects.scss";

const projects = [
  {
    id: 0,
    title: "PersonalTrAIner",
    description:
      "The React-App uses Pose Estimation with the pre-trained model PoseNet to detect whether sport-exercises are executed correctly. It uses a webcam to analyze the poses of the user. In this first version nine different excercises can be selected. The application then leads through a training with a fixed amount of sets and repetitions per excercise.  ",
    stack: ["node.js", "react"],
    github: "https://github.com/LarissaMiko/PersonalTrAIner",
  },
  {
    id: 1,
    title: "IOS-Game",
    description:
      "Jump 'n' Run meets the fun of a racing game. Choose a level and a character and be the first to arrive at the finish line. In each race there are four AI-enemies to beat. If enough coins are collected in the game, cool new cars can be purchased in the shop.",
    stack: ["swift", "spriteKit"],
    github: "https://github.com/LarissaMiko/IOS-game-carruntine",
  },
  {
    id: 2,
    title: "One-on-One-Chat",
    description:
      "This chat was designed as a microservice as part of a tool for hosting conferences online. It offers series of short anonymous one-on-one chat-sessions for participants of a conference in order to make new contacts and find people who share interests. It is is connected with other microservices (e.g. Account- or Schedule-Management) via API-endpoints.",
    stack: ["Vue.js", "node.js", "express", "mongoDB", "REST-API"],
    github: "https://github.com/LarissaMiko/one-on-one-chat",
  },
  {
    id: 3,
    title: "Toy-Example of a Python Blockchain",
    description:
      "Still in progress. So far: Classes for Block and Blockchain and a Proof-of-Work mechanism with adjustable mine-rate. TODO: Cryptocurrency + Wallet and frontend with React/Vue ",
    stack: ["Python", "React", "Flask"],
    github: "https://github.com/LarissaMiko/basic-python-blockchain",
  },
];

const Projects: FC = () => {
  return (
    <section className="section projects">
      <Title title={"Recent Projects"} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
