import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import { Navbar } from "./components/navbar/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <AboutUs />
    </Router>
  );
}

export default App;
