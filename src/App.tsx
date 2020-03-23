import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import HeaderBar from './components/header-bar/header-bar';
import CodePlay from './containers/code-play/code-play';
import PlayGround from './containers/playground/playground';
import SideNavBar from './containers/side-nav/side-nav';
import Library from './module/component-library/component-library';
import Home from './module/home/home';

const App: React.FC = () => {
  return (
    <div className="wrapper h-100">
      <HeaderBar brandName="RH-DEV" />
      <div className="d-flex h-100">
        <SideNavBar />
        <div className="p-4 ml-md-5 mt-5 w-100 mb-4">
          <Switch>
            <Route path="/code-play">
              <CodePlay />
            </Route>
            <Route path="/compare">
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
  );
};

export default App;
