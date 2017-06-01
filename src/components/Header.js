import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Header;
