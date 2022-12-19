import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0,
    myInput: '',
  };

  componentDidMount() {
    console.log('mounting');
  }

  componentDidUpdate() {
    console.log('updating');
  }

  componentWillUnmount() {
    console.log('un mounted');
  }

  // increment = () => {
  //   this.setState((prevState) => {
  //     return {
  //       counter: prevState.counter + 1,
  //     };
  //   });
  // };

  increment = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => {
      if (prevState.counter > 0) return { counter: prevState.counter - 1 };
    });
  };

  handleChangeInput = (event) => {
    this.setState({ myInput: event.target.value });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.decrement()}>-</button>
        <p>{this.state.counter}</p>
        <button onClick={this.increment}>+</button>

        <br />
        <br />
        <br />

        {/* <input onChange={(e) => this.handleChangeInput(e)} /> */}
        <input onChange={this.handleChangeInput} />
      </div>
    );
  }
}

export default Counter;
