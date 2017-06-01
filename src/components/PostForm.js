import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: ''
    };
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let author = this.state.author.trim();
    let text = this.state.text.trim();

    if (!text || !author) {
      return;
    } else {
      this.props.onPostSubmit({ author: author, text: text });
      this.setState({ author: '', text: '' });
    }
  }

  render() {
    return (
      <div>
        <h2>Add a Post</h2>
        <form className="post-form" onSubmit={ this.handleSubmit }>
          <input
            className='post-form-input post-form-author'
            type='text'
            placeholder='Your name...'
            value={ this.state.author }
            onChange={ this.handleAuthorChange } />
          <input
            className='post-form-input post-form-text'
            type='text'
            placeholder='Say something...'
            value={ this.state.text }
            onChange={ this.handleTextChange } />
          <button className='post-form-button' type='submit' value='Post'>Post</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
