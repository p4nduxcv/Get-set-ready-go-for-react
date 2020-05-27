import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Pandula",
    };
    console.log("Life Cycle A constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Life Cycle A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Life Cycle A componentDidMount");
  }

  render() {
    console.log("Life Cycle A render");
    return (
      <div>
        <div>Life Cycle A </div> <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
