import React, { Component } from 'react';
import Counter from '../components/Counter';
import Header from '../components/Header';
import Card from '../components/Card';

const counters = [
  { id: 1, count: 0, steps: 1 },
  { id: 2, count: 0, steps: 1 },
  { id: 3, count: 0, steps: 1 },
];

export default class Counters extends Component {
  state = {
    counters,
    total: 0,
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

  componentDidUpdate() {
    this.setState((prevState) => {
      const newTotal = prevState.counters.reduce((accumulator, currentValue) => accumulator + currentValue.count, 0);
      if (prevState.total !== newTotal)
        return {
          total: newTotal,
        };
    });
  }

  // onIncrement = (id, steps) => this.setState((prevState) => prevState.counters.map((item) => (item.id === id ? { ...item, count: item.count + steps } : item)));

  render() {
    return (
      <div>
        <Header myAction={<p>Hello From Parent</p>} />
        <Header myAction={<h1>Hello Again</h1>} />
        <Header myAction={<button>Hello Again</button>} />
        <Header myAction={<Counter>Hello Again</Counter>} />
        <Header myAction={<Card>Hello Again</Card>} />

        {this.state.counters.map((item) => (
          // <Counter key={item.id} count={item.count} id={item.id} steps={item.steps} />
          // <Counter key={item.id} item={item} /> // passing as an object
          <Counter key={item.id} {...item} onIncrement={this.onIncrement} newThis={this} /> // same as the first one
        ))}

        <h1>{this.state.total}</h1>
      </div>
    );
  }
}
