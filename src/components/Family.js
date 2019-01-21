import React from "react";
import Person from "./Person";
const Family = props => {
  //console.log("props coming into family: ", props);

  return (
    <div className="family">
      <Person />
    </div>
  );
};

export default Family;
