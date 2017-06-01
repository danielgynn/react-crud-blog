import React, { Component } from 'react';
import marked from 'marked';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state= {
      toBeUpdated: false,
      author: '',
      text: ''
    };
    this.deletePost = this.deletePost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handlePostUpdate = this.handlePostUpdate.bind(this);
  }

  updatePost(e) {
    e.preventDefault();
    this.setState({ toBeUpdated: !this.state.toBeUpdated });
  }

  handlePostUpdate(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    let author = (this.state.author) ? this.state.author : null;
    let text = (this.state.text) ? this.state.text : null;
    let post = { author: author, text: text};
    this.props.onPostUpdate(id, post);
    this.setState({
      toBeUpdated: !this.state.toBeUpdated,
      author: '',
      text: ''
    })
  }

  deletePost(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    this.props.onPostDelete(id);
    console.log('Post has been deleted!');
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }

  rawMarkup() {
    let rawMarkup = marked(this.props.children.toString());
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="post">
        <h3>{this.props.author}</h3>
        <span dangerouslySetInnerHTML={ this.rawMarkup() } />
        <button className='light-button' onClick={ this.updatePost }>update</button>
        <button className='light-button' onClick={ this.deletePost }>delete</button>

        { (this.state.toBeUpdated)
          ? (<form className='post-form' onSubmit={ this.handlePostUpdate }>
            <input
              className='post-form-input post-form-author'
              type='text'
              placeholder='Update name...'
              value={ this.state.author }
              onChange= { this.handleAuthorChange } />
            <input
              className='post-form-input post-form-text'
              type='text'
              placeholder='Update your post...'
              value={ this.state.text }
              onChange={ this.handleTextChange } />
            <button
              className='post-form-button'
              type='submit'
              value='Update'>
              Update
            </button>
          </form>) : null}
      </div>
    );
  }
}

export default Post;
