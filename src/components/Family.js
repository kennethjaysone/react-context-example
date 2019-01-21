import React from "react";
import Person from "./Person";
import { throws } from "assert";
const Family = props => {
  console.log("props coming into family: ", props);

  return (
    <div className="family">
      <Person name={props.name} />
    </div>
  );
};

export default Family;
