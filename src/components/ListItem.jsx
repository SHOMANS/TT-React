import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    // console.log(this.props.todo);

    return (
      <li>
        <span>user id: {this.props.todo.userId}</span> | <span>id: {this.props.todo.id}</span> | <span>title: {this.props.todo.title}</span> |{' '}
        <span>{this.props.todo.completed ? 'completed' : 'not completed'}</span>
      </li>
    );
  }
}
