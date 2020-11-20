import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import MenuBar from "./components/MenuBar/MenuBar";
import About from "./components/About/About";

//Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const routes = [
  {
    path: "/",
    Component: Header,
  },
  {
    path: "/projects",
    Component: Projects,
  },
  {
    path: "/about",
    Component: About,
  },
];

const App: FC = () => {
  const links = routes.map((route) => route.path);
  return (
    <Router>
      <div>
        <MenuBar links={links}></MenuBar>
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              <Component />
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
