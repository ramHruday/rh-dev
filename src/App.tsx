import React from "react";
import { Route, Switch } from "react-router-dom";
import Aboutme from "./about-me-page/about-me/about-me";
import "./App.scss";
import SideNavBar from "./containers/side-nav/side-nav";
import { ThemeContextProvider } from "./contexts";
import Home from "./home-page/home/home";
import SkillLibrary from "./skill-page/skill-library/skill-library";

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <div className="wrapper">
        <div className="d-flex h-100">
          <SideNavBar />
          {/* <Logo /> */}
          <div className="p-0 w-100 overflow-auto">
            <Switch>
              <Route path="/about-me">
                <Aboutme />
              </Route>

              <Route path="/library">
                <SkillLibrary />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
};

export default App;
