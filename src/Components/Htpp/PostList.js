import React, { Component } from "react";
import axios from "axios";

export class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/post1s")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Awulak Awulak" });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        List of past ballo
        {posts.length
          ? posts.map((post) => <div key={post.userId}>{post.title}</div>)
          : null}
        {errorMsg ? <div> {errorMsg} </div> : null}
      </div>
    );
  }
}

export default PostList;
