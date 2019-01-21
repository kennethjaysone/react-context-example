import React, { Component } from "react";
import { throws } from "assert";

// 1) First you create a context and export it to be used in components that want to consume

const MyContext = React.createContext();

// 2) You're going to need a Provider Component that will wrap the App component

class MyProvider extends Component {
  constructor() {
    super();

    this.growAYearOlder = this.growAYearOlder.bind(this);
  }

  state = {
    name: "Yogee",
    age: 32,
    awesome: true
  };

  growAYearOlder() {
    this.setState({ age: this.state.age + 1 });
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          ...this.state,
          growAYearOlder: this.growAYearOlder
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
const MyConsumer = MyContext.Consumer;
export { MyProvider, MyConsumer };
