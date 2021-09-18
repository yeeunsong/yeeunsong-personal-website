import "./App.css";
import { Canvas } from "react-three-fiber";
import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Experiences from "./Pages/Experiences";

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/experiences" component={Experiences} />
      </Switch>
    </>
  );
}
