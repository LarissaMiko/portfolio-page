import { projectType } from "../types/pagetypes";

export const projects: projectType[] = [
  {
    id: 0,
    title: "PersonalTrAIner",
    description:
      "The React-App uses Pose Estimation with the pre-trained model PoseNet to detect whether sport-exercises are executed correctly. It uses a webcam to analyze the poses of the user. In this first version nine different excercises can be selected. The application then leads through a training with a fixed amount of sets and repetitions per excercise.  ",
    stack: ["node.js", "react", "tensorflow.js"],
    github: "https://github.com/LarissaMiko/PersonalTrAIner",
    featured: true,
  },
  {
    id: 1,
    title: "IOS-Game",
    description:
      "Jump 'n' Run meets the fun of a racing game. Choose a level and a character and be the first to arrive at the finish line. In each race there are four AI-enemies to beat. If enough coins are collected in the game, cool new cars can be purchased in the shop.",
    stack: ["swift", "spriteKit"],
    github: "https://github.com/LarissaMiko/IOS-game-carruntine",
    featured: true,
  },
  {
    id: 2,
    title: "OrthoGloria Website",
    description:
      "Conception, Design and Implementation of a new Website for an orthopedist in Munich. ",
    stack: ["HTML", "CSS", "Javascript", "Bootstrap"],
    url: "https://www.orthogloria.de/index.html",
    featured: true,
  },
  {
    id: 3,
    title: "Lukas-Brandl Website",
    description:
      "Conception, Design and Implementation of a new Website for a magician from Munich.",
    stack: ["HTML", "CSS", "Javascript", "Bootstrap"],
    url: "https://lukas-brandl.com/",
    featured: false,
  },
  {
    id: 4,
    title: "One-on-One-Chat",
    description:
      "This chat was designed as a microservice as part of a tool for hosting conferences online. It offers series of short anonymous one-on-one chat-sessions for participants of a conference in order to make new contacts and find people who share interests. It is is connected with other microservices (e.g. Account- or Schedule-Management) via API-endpoints.",
    stack: ["Vue.js", "node.js", "express", "mongoDB", "REST-APIs"],
    github: "https://github.com/LarissaMiko/one-on-one-chat",
    featured: false,
  },
  {
    id: 5,
    title: "Toy-Example of a Python Blockchain",
    description:
      "Still in progress. So far: Classes for Block and Blockchain and a Proof-of-Work mechanism with adjustable mine-rate. TODO: Cryptocurrency + Wallet and frontend with React/Vue ",
    stack: ["Python", "React", "Flask"],
    github: "https://github.com/LarissaMiko/basic-python-blockchain",
    featured: false,
  },
];
