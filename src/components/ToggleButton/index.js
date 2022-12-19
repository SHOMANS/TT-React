import React, { Component } from 'react';
import './style.css';

class ToggleButton extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     theme: 'light',
  //   };
  // }

  state = {
    theme: 'light',
  };

  handleToggleTheme = () => {
    // console.log('toggle');
    // this.setState({ theme: 'dark' });

    // this.state.theme === 'light' ? this.setState({ theme: 'dark' }) : this.setState({ theme: 'light' });

    this.setState((prevState) => (prevState.theme === 'light' ? { theme: 'dark' } : { theme: 'light' }));
  };

  render() {
    return (
      <button className={`toggleButton ${this.state.theme}`} onClick={this.handleToggleTheme}>
        {this.state.theme === 'light' ? 'dark' : 'light'}
      </button>
    );
  }
}

export default ToggleButton;
