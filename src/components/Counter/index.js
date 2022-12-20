import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div style={{ padding: 20 }}>
        <button onClick={() => this.decrement()}>-</button>
        <p>{this.props.count}</p>
        <button onClick={() => this.props.onIncrement(this.props.id, this.props.steps)}>+</button>
      </div>
    );
  }
}

export default Counter;
