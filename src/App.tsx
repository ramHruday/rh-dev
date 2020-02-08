import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import HeaderBar from './components/header-bar/header-bar';
import PlayGround from './containers/playground/playground';
import SideNavBar from './containers/side-nav/side-nav';
import MainPage from './module/main-page/main-page';

const App: React.FC = () => {
  return (
    <div className="App">
      <SideNavBar />

      <HeaderBar brandName="RH-DEV" />
      <Router>
        <Switch>
          <Route path="/play/:componentId">
            <PlayGround />
          </Route>
          <Route path="/">
            <div className="pt-3">
              <MainPage />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
