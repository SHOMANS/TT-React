import React, { Component } from 'react';
import ListItem from '../components/ListItem';

const myData = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true,
  },
];

const data = ['ahmed', 'mohammed', 'mahmoud', 'may', 'hiba', 'saleh', 'reema'];

export default class TodoList extends Component {
  obj = {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  };

  render() {
    return (
      <div>
        <ul>
          {/* {myData.map((todo, index) => (
            <ListItem todo={todo} key={todo.title} />
            // <div key={todo.id}>{todo.title}</div>
          ))} */}

          {data.map((item) => (
            <div key={item}>{item}</div>
          ))}

          {/* <li>
            <span>user id: {this.obj.userId}</span> | <span>id: {this.obj.id}</span> | <span>title: {this.obj.title}</span> |{' '}
            <span>{this.obj.completed ? 'completed' : 'not completed'}</span>
          </li> */}
        </ul>
      </div>
    );
  }
}
