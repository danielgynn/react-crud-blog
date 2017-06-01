import React, { Component } from 'react';
import PostList from './PostList';
import PostForm from './PostForm';
import DATA from '../test-data';

class PostArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div className="post-wrapper">
        <h2>Posts</h2>
        <PostList data={DATA} />
        <PostForm />
      </div>
    );
  }
}

export default PostArea;
