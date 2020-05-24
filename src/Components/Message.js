import React, { Component } from "react";

export default class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome OI",
    };
  }
  changeMessage() {
      this.setState({
          message: 'Wellome aaaa thaks for sub'
      })
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
