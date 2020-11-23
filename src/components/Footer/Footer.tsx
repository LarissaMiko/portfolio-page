import React, { FC } from "react";
import { FaGithubSquare, FaLinkedin, FaXingSquare } from "react-icons/fa";
import { socialLinkType } from "../../types/pagetypes";
import "./Footer.scss";

export const socialLinks: socialLinkType[] = [
  {
    id: 1,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/LarissaMiko",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/larissa-mikolaschek-71b9281a0/",
  },
  {
    id: 3,
    icon: <FaXingSquare className="social-icon"></FaXingSquare>,
    url: "https://www.xing.com/profile/Larissa_Mikolaschek/cv",
  },
];

const Footer: FC = () => {
  const links = socialLinks.map((link) => {
    return (
      <li key={link.id}>
        <a
          href={link.url}
          className="social-link"
          target="_blank"
          rel="noreferrer"
        >
          {link.icon}
        </a>
      </li>
    );
  });

  return (
    <footer className="footer">
      <div>
        <ul className={"social-links footer-links"}>{links}</ul>
        <p>
          &copy;{new Date().getFullYear()}
          <span> Larissa Mikolaschek </span> all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
