import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import SideNavBar from "./containers/side-nav/side-nav";
import { ThemeContextProvider } from "./contexts";
import Aboutme from "./module/about-me/about-me";
import Home from "./module/home/home";
import SkillLibrary from "./module/skill-library/skill-library";

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <div className="wrapper">
        <div className="d-flex h-100">
          <SideNavBar />
          {/* <Logo /> */}
          <div className="p-3 w-100 overflow-auto">
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
