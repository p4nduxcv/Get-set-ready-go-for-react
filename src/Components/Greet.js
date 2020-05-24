import React from "react";

//ES5
// function Greet() {
//   return <h1>Hello Pandu</h1>;
// }

//ES6
const Greet = (props) => {
  return (
    <div>
      <h1> Fuqer {props.name} </h1>
      {props.children}
    </div>
  );
};

export default Greet;
