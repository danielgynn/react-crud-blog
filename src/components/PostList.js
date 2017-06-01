import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  render() {
    let postNodes = this.props.data.map(post => {
      return (
        <Post author={ post.author } key={ post.id }>
          { post.text}
        </Post>
      )
    })
    return (
      <div className="post-list">
        { postNodes }
      </div>
    )
  }
}

export default PostList;
