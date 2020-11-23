import React, { FC } from "react";
import { Link } from "react-router-dom";
import { AiOutlineAlignRight } from "react-icons/ai";
import { menuLink } from "../../types/pagetypes";
import "./MenuBar.scss";

export type MenubarProps = {
  links: menuLink[];
  toggleSideMenu: Function;
};

const MenuBar: FC<MenubarProps> = ({ links, toggleSideMenu }: MenubarProps) => {
  const menuLinks = () => {
    return (
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path} className="navLink">
              {link.path === "/"
                ? "HOME"
                : link.path.substring(1).toLocaleUpperCase()}
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
          <button
            type="button"
            className="toggle-btn"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              toggleSideMenu();
            }}
          >
            <AiOutlineAlignRight></AiOutlineAlignRight>
          </button>
        </div>
        <div>{menuLinks()}</div>
      </div>
    </nav>
  );
};

export default MenuBar;
