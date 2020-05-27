import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
    };
  }

  changeNameHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  changeCommentHandler = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.username} hola ${this.state.comment}`);
    event.preventDefault();
  };

  render() {
    const { username, comment } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>User Name</label>
          <input
            type="text"
            value={username}
            onChange={this.changeNameHandler}
          ></input>
        </div>
        <div>
          <label>Comments</label>
          <input
            type="text"
            value={comment}
            onChange={this.changeCommentHandler}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default Form;
