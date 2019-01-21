import React, { Component } from "react";
import { MyConsumer } from "../context";

class Person extends Component {
  render() {
    return (
      <MyConsumer>
        {value => (
          <React.Fragment>
            <h2>This is the person component that is 2 levels down</h2>

            <p>
              How do we access the data from the provider within this person
              component
            </p>

            <h3>By using a Consumer</h3>

            <p>I'm inside the consumer</p>

            <ul>
              <li>Name: {value.name}</li>
              <li>age: {value.age}</li>
              <li>{value.awesome ? "Awesome" : "Not awesome"}</li>
            </ul>

            <button onClick={value.growAYearOlder}>Add age</button>
          </React.Fragment>
        )}
      </MyConsumer>
    );
  }
}

export default Person;
