import React, { FC } from "react";
import "./Header.scss";
import profile from "../../images/profile.jpeg";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h2>Larissa Mikolaschek</h2>
            <h4>Software Engineer and mathematics graduate</h4>
            <Link to="/contact" className="btn">
              Contact Me
            </Link>
          </div>
        </article>
        <img className="hero-img profile-pic" src={profile} alt="profile-pic" />
      </div>
    </header>
  );
};

export default Header;
