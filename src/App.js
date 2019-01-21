import React, { Component } from "react";
import "./App.css";

import Family from "./components/Family";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I'm an App</h1>
        <Family />
      </div>
    );
  }
}

export default App;
