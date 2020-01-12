import React from 'react';

import './App.css';

import HeaderBar from './components/header-bar/header-bar';
import MainPage from './module/main-page/main-page';

const App: React.FC = () => {
  return (
    <div className="App">
      <HeaderBar brandName="RH-DEV" />
      <MainPage />
    </div>
  );
};

export default App;
