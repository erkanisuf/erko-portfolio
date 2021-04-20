import React from "react";

import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import MyWork from "./components/MyWork/MyWork";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <MyWork />
    </div>
  );
}

export default App;
