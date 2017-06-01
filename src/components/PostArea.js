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
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
  }

  loadPostsFromServer() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({ data: res.data });
      })
  }

  handlePostSubmit(post) {
    let posts = this.state.data;
    post.id = Date.now();
    let newPosts = posts.concat([post]);
    this.setState({ data: newPosts });

    axios.post(this.props.url, post)
      .catch(err => {
        console.error(err);
        this.setState({ data: posts });
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
        <PostForm onPostSubmit={ this.handlePostSubmit } />
      </div>
    );
  }
}

export default PostArea;
