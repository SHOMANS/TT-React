import React, { Component } from 'react';
import Counter from '../components/Counter';

const counters = [
  { id: 1, count: 0, steps: 1 },
  { id: 2, count: 0, steps: 1 },
  { id: 3, count: 0, steps: 1 },
];

export default class Counters extends Component {
  state = {
    counters,
  };

  onIncrement = (id, steps = 1) => {
    this.setState((prevState) => {
      return {
        counters: prevState.counters.map((item) => {
          if (item.id === id) {
            // console.log({ ...item, count: item.count + steps });
            return { ...item, count: item.count + steps };
          }
          return item;
        }),
      };
    });
  };

  // onIncrement = (id, steps) => this.setState((prevState) => prevState.counters.map((item) => (item.id === id ? { ...item, count: item.count + steps } : item)));

  render() {
    return (
      <div>
        {this.state.counters.map((item) => (
          // <Counter key={item.id} count={item.count} id={item.id} steps={item.steps} />
          // <Counter key={item.id} item={item} /> // passing as an object
          <Counter key={item.id} {...item} onIncrement={this.onIncrement} /> // same as the first one
        ))}
      </div>
    );
  }
}
