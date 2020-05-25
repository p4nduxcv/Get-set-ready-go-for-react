import React, { Component } from "react";

export default class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      message: "hello",
    };
    // 3.) Official Approches cinding the class contructor
    // this.clickHandler = this.clickHandler.bind(this);
  }
//   clickHandler() {
//     this.setState((prevState) => ({
//       message: "good bye",
//     }));
//     console.log(this) 
//   }

    clickHandler = () =>  {
    this.setState((prevState) => ({
      message: "good bye",
    }));
    console.log(this) 
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* 1.) First Approches binding in render
        <button onClick={this.clickHandler.bind(this)}>class</button>    */}
        {/* 2.) Arrow fuction approche
        <button onClick={() => this.clickHandler()}>class</button>  */}
        {/* <button onClick={this.clickHandler}>class</button> */}
        <button onClick={this.clickHandler}>class</button>
      </div>
    );
  }
}
