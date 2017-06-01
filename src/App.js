import React, { Component } from 'react';
import Header from './components/Header';
import PostArea from './components/PostArea';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="React CRUD Blog" />
        <PostArea />
      </div>
    );
  }
}

export default App;
