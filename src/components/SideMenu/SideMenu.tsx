import React, { FC } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { menuLink } from "../../types/pagetypes";
import { socialLinks } from "../Footer/Footer";
import "./SideMenu.scss";

export type SideMenuProps = {
  links: menuLink[];
  isOpen: boolean;
  toggleSideMenu: Function;
};

const SideMenu: FC<SideMenuProps> = ({
  links,
  isOpen,
  toggleSideMenu,
}: SideMenuProps) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""} `}>
      <button
        className="close-btn"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          toggleSideMenu();
        }}
      >
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isOpen ? "sidebar-links" : ""}>
          {links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                className="navLink"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  toggleSideMenu();
                }}
              >
                {link.path === "/"
                  ? "HOME"
                  : link.path.substring(1).toLocaleUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={`social-links ${isOpen ? "sidebar-icons" : ""}`}>
          {socialLinks.map((socialLink) => {
            return (
              <li key={socialLink.id}>
                <a
                  href={socialLink.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`social-link ${isOpen ? "sidebar-icons" : ""}`}
                >
                  {socialLink.icon}{" "}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default SideMenu;
