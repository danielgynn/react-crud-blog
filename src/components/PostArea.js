import React, { Component } from 'react';
import axios from 'axios';
import PostList from './PostList';
import PostForm from './PostForm';
import LikeCounter from './LikeCounter';

class PostArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.loadPostsFromServer = this.loadPostsFromServer.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handlePostUpdate = this.handlePostUpdate.bind(this);
    this.handlePostDelete = this.handlePostDelete.bind(this);
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

  handlePostUpdate(id, post) {
    axios.put(`${this.props.url}/${id}`, post)
      .catch(err => {
        console.log(err);
      })
  }

  handlePostDelete(id) {
    axios.delete(`${this.props.url}/${id}`)
      .then(res => {
        console.log('Post deleted!');
      })
      .catch(err => {
        console.log(err);
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
        <PostList
          onPostUpdate={ this.handlePostUpdate }
          onPostDelete={ this.handlePostDelete }
          data={ this.state.data }
        />
        <LikeCounter
          value={this.props.value}
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
        />  
        <PostForm onPostSubmit={ this.handlePostSubmit } />
      </div>
    );
  }
}

export default PostArea;
