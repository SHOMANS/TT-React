import React, { Component } from 'react';

class Counter extends Component {
  decrement = () => {
    const { steps, id, parentSetState } = this.props;

    parentSetState((prevState) => {
      // newThis is a props from the parent component and its value is its this
      return {
        counters: prevState.counters.map((item) => {
          if (item.id === id && item.count >= steps) {
            return { ...item, count: item.count - steps };
          }
          return item;
        }),
      };
    });
  };

  render() {
    return (
      <div style={{ padding: 20 }}>
        <button onClick={this.decrement}>-</button>
        <p>{this.props.count}</p>
        <button onClick={() => this.props.onIncrement(this.props.id, this.props.steps)}>+</button>
      </div>
    );
  }
}

export default Counter;
