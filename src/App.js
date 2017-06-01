import React, { Component } from 'react';
import Header from './components/Header';
import PostArea from './components/PostArea';

class App extends Component {
  render() {
    if (process.env.NODE_ENV === 'development') {
      console.log(process.env.NODE_ENV);
      return (
        <div>
          <Header title='React CRUD Blog' />
          <PostArea url='http://localhost:3001/api/posts' pollInterval={2000} />
        </div>
      );
    } else if (process.env.NODE_ENV === 'production') {
      console.log(process.env.NODE_ENV);
      return (
        <div>
          <Header title='React CRUD Blog' />
          <PostArea url='https://react-crud-blog.herokuapp.com/api/posts' pollInterval={2000} />
        </div>
      );
    }
  }
}

export default App;
