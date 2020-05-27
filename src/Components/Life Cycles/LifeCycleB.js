import React, { Component } from "react";

export class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Pandula",
    };
    console.log("Life Cycle B constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Life Cycle B getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Life Cycle B componentDidMount");
  }

  render() {
    console.log("Life Cycle B render");
    return <div>Life Cycle B </div>;
  }
}

export default LifeCycleB;
