import React, { Component } from "react";
import "./App.css";

import Family from "./components/Family";

class App extends Component {
  state = {
    name: "Kenneth",
    age: 34,
    awesome: true
  };

  render() {
    return (
      <div className="App">
        <h1>I'm an App</h1>
        <Family name="Kenneth" />
      </div>
    );
  }
}

export default App;
