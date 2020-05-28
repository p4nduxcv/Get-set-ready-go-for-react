import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

export default class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Pandula",
    };
  }

  componentDidMount() {
    setInterval(
      () =>
        this.setState({
          name: "pandula",
        }),
      2000
    );
  }

  render() {
    return (
      <div>
        <h1>Parent Compo => </h1>
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}
