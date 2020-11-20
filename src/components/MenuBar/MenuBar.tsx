import React, { FC } from "react";
import { Link } from "react-router-dom";
import { AiOutlineAlignRight } from "react-icons/ai";
import "./MenuBar.scss";

export type MenubarProps = {
  links: string[];
};

const MenuBar: FC<MenubarProps> = ({ links }: MenubarProps) => {
  const toggleSidebar = () => {
    console.log("toggle side bar");
  };

  const menuLinks = () => {
    return (
      <ul className="nav-links">
        {links.map((link) => (
          <li>
            <Link to={link} className="navLink">
              {link === "/" ? "HOME" : link.substring(1).toLocaleUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <AiOutlineAlignRight></AiOutlineAlignRight>
          </button>
        </div>
        <div>{menuLinks()}</div>
      </div>
    </nav>
  );
};

export default MenuBar;
