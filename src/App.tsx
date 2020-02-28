import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import HeaderBar from './components/header-bar/header-bar';
import PlayGround from './containers/playground/playground';
import SideNavBar from './containers/side-nav/side-nav';
import Library from './module/component-library/component-library';
import Home from './module/home/home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="wrapper h-100">
        <HeaderBar brandName="RH-DEV" />
        <div className="d-flex h-100">
          <SideNavBar />
          <div className="p-4 ml-md-5 mt-5 w-100">
            <Switch>
              <Route path="/play/:componentId">
                <PlayGround />
              </Route>
              <Route path="/library">
                <Library />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
