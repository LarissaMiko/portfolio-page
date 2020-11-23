import React, { FC } from "react";
import Title from "../Title";
import profileImage from "../../images/profile.jpeg";
import "./About.scss";

const stack = [
  {
    id: 1,
    title: "Web-Development",
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
            I am a Full Stack Developer with a Bachelor in Mathematics. At the
            moment I am finishing my Master in Computer Science with a focus on
            Data Science and Machine Learning. Apart from that I am passionate
            about Blockchain Technologies and Applications of modern
            Cryptography. Always looking for new challenges.
          </p>
          <div className="about-stack">
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
