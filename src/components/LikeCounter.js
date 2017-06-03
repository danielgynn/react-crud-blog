import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LikeCounter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props;

    return (
      <div className="post-wrapper">
        <h2>Likes: {value}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    );
  }
}

export default LikeCounter;
