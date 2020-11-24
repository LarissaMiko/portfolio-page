import React, { FC } from "react";
import Title from "../Title";
import profileImage from "../../images/profile.jpeg";
import "./About.scss";

const stack = [
  {
    id: 1,
    title: "React",
  },
  {
    id: 2,
    title: "Jest",
  },
  {
    id: 3,
    title: "Vue",
  },
  {
    id: 4,
    title: "HTML",
  },
  {
    id: 5,
    title: "CSS/Sass",
  },
  {
    id: 6,
    title: "Typescript",
  },
  {
    id: 7,
    title: "Javascript",
  },
  {
    id: 8,
    title: "MongoDB",
  },
  {
    id: 9,
    title: "Rest-apis",
  },
  {
    id: 10,
    title: "GraphQl",
  },
  {
    id: 11,
    title: "Python",
  },
  {
    id: 12,
    title: "C++",
  },
  {
    id: 13,
    title: "Swift",
  },
  {
    id: 14,
    title: "SpriteKit",
  },
];

const About: FC = () => {
  return (
    <section className="about-page">
      <div className="section-center about-center">
        <img className="about-img" src={profileImage} alt="profile" />
        <article className="about-text">
          <Title title={"About Me:"}></Title>
          <p>
            I am a Software Engineer with a Bachelor in Mathematics. At the
            moment I am finishing my Master in Computer Science with a focus on
            Data Science and Machine Learning. Also I am supporting the
            Tech-Team at the digital agency DieProduktMacher with building
            various applications like customer-portals, websites or chatbots.
            <br></br>
            Apart from that I am passionate about Blockchain Technologies and
            Applications of modern Cryptography. I love getting into new
            programming languages and frameworks and I am always looking for new
            challenges.
          </p>
          <div className="about-stack">
            <h3>Tech Stack:</h3>
            {stack.map((item) => {
              return <span key={item.id}>{item.title}</span>;
            })}
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
