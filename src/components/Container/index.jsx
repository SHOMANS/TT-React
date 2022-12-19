import React, { Component } from 'react';
import './style.css';

class Container extends Component {
  render() {
    return <div className={this.props.className ? 'container ' + this.props.className : 'container'}>{this.props.children}</div>;
  }
}

export default Container;
