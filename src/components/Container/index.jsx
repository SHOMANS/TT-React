import React, { Component } from 'react';
import './style.css';

class Container extends Component {
  state = {
    yahia: 'hello from child',
  };

  render() {
    return (
      <div className={this.props.className ? 'container ' + this.props.className : 'container'}>
        {/* <button
          onClick={() => {
            this.props.testFunc(this.state.yahia);
          }}
        >
          click me
        </button> */}

        {this.props.children}
      </div>
    );
  }
}

export default Container;
