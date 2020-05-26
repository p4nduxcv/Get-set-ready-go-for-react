import React from "react";

function ChildComponent(props) {
  console.log(props)
  return (
    <div>
      {/* <button onClick={() => props.greetHandler('child pandula')}>Greet Parent</button> */}
      {/* <button onClick={() => props.greetHandler("child pandula")}> */}
      <button onClick={() => props.changeStateHandler(true)}>
        Greet Parent
      </button>
    </div>
  );
}

export default ChildComponent;
