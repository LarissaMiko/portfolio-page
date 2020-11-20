import React, { FC } from "react";
import "./Header.scss";
import profile from "../../images/profile.jpeg";
//import { Container } from "react-bootstrap";

const Header: FC = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Larissa</h1>
            <h4>Full Stack developer and mathematics graduate</h4>
            <p className="btn">contact me</p>
          </div>
        </article>
        <img className="hero-img profile-pic" src={profile} alt="profile-pic" />
      </div>
    </header>
  );
};

export default Header;
