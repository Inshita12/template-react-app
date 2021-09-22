import React, { Component } from "react";
import { PostLists } from "./";

class Home extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="home">
        <PostLists posts={posts} />
      </div>
    );
  }
}

export default Home;
