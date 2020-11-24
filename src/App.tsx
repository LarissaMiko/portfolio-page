import React, { FC, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import FeaturedProjects from "./components/FeaturedProjects/FeaturedProjects";
import MenuBar from "./components/MenuBar/MenuBar";
import SideMenu from "./components/SideMenu/SideMenu";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

//Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const routes = [
  {
    id: 0,
    path: "/",
    Component: Header,
  },
  {
    id: 1,
    path: "/projects",
    Component: Projects,
  },
  {
    id: 2,
    path: "/about",
    Component: About,
  },
  {
    id: 3,
    path: "/contact",
    Component: Contact,
  },
];

const App: FC = () => {
  const links = routes.map((route) => ({ id: route.id, path: route.path }));

  const [isOpen, setIsOpen] = useState(false);
  const toggleSideMenu = () => {
    console.log("toggle");
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div>
        <MenuBar links={links} toggleSideMenu={toggleSideMenu}></MenuBar>
        <SideMenu
          links={links}
          toggleSideMenu={toggleSideMenu}
          isOpen={isOpen}
        ></SideMenu>
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              <Component />
              {Component === Header ? (
                <FeaturedProjects></FeaturedProjects>
              ) : (
                <></>
              )}
            </Route>
          ))}
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
