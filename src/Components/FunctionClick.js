import React from "react";

//ES6
function FunctionClick() {
    const clickHandler = () => {
        console.log('hit')
    }
  return (
    <div>
      <button onClick={clickHandler}> Click</button>
    </div>
  );
}

export default FunctionClick;
