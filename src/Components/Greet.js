import React from "react";

//ES5
// function Greet() {
//   return <h1>Hello Pandu</h1>;
// }

//ES6
const Greet = (props) => {  // methan pass karanwanam ({name})
const {name} = props
  return (
    <div>
      <h1> Fuqer {name} </h1>
      {/* {props.children} */}
    </div>
  );
};

export default Greet;
