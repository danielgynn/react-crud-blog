import React, { Component } from 'react';
import axios from 'axios';
import PostList from './PostList';
import PostForm from './PostForm';

class PostArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.loadPostsFromServer = this.loadPostsFromServer.bind(this);
  }

  loadPostsFromServer() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({ data: res.data });
      })
  }

  componentDidMount() {
    this.loadPostsFromServer();
    setInterval(this.loadPostsFromServer, this.props.pollInterval);
  }

  render() {
    return (
      <div className="post-wrapper">
        <h2>Posts</h2>
        <PostList data={ this.state.data } />
        <PostForm />
      </div>
    );
  }
}

export default PostArea;
