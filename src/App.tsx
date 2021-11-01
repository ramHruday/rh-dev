import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import SideNavBar from "./containers/side-nav/side-nav";
import Home from "./module/home/home";
import SkillLibrary from "./module/skill-library/skill-library";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="d-flex h-100">
        <SideNavBar />
        <div className="p-3 w-100">
          <Switch>
            {/* <Route path="/code-play">
              <CodePlay />
            </Route> */}

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
  );
};

export default App;
