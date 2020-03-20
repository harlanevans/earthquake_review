import React from "react";

import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Quakes from "./components/quakes/Quakes";
import ShowQuake from './components/quakes/ShowQuake';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quakes" component={Quakes} />
          <Route exact path="/quakes/:id" component={ShowQuake} />
        </Switch>
      </>
    );
  }
}

export default App;
