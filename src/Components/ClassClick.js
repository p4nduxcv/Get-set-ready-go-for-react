import React, { Component } from "react";

export default class ClassClick extends Component {
  clickHandler() {
    console.log("hit");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Class</button>
      </div>
    );
  }
}
