import React, { Component } from 'react';
import PostList from './PostList';
import DATA from '../test-data';

class PostArea extends Component {
  render() {
    return (
      <div className="post-wrapper">
        <h2>Posts</h2>
        <PostList data={DATA} />
      </div>
    );
  }
}

export default PostArea;
