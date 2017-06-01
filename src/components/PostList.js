import React, { Component } from 'react';

class PostList extends Component {
  render() {
    let postNodes = this.props.data.map(post => {
      return (
        <div>
          <h3>{post.author}</h3>
          <span>{post.text}</span>
        </div>
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
