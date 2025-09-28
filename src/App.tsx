import React from "react";
import "./App.scss";
import LandingPage from "./components/LandingPage"; // Import the new LandingPage component
import { ThemeContextProvider } from "./contexts";

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <LandingPage /> {/* Render the new LandingPage component */}
    </ThemeContextProvider>
  );
};

export default App;
