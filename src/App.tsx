import React from "react";

import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import MyWork from "./components/MyWork/MyWork";
import Tooltip from "./components/Tooltip/Tooltip";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <MyWork />
      <Tooltip />
    </div>
  );
}

export default App;
