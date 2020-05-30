import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  render() {
    console.log(this.props.children);
    if (this.state.hasError) {
      return <div>Some thing went wrong</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
