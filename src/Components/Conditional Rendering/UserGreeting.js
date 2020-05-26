import React, { Component } from "react";
import ChildComponent from "./../ChildComponent";

export default class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: true,
    };
  }

  render() {
    if (this.state.isLogged) {
      return (
        <div>
          <h1>Welcome Pandula </h1>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Welcome Guest </h2>
        </div>
      );
    }
  }
}
