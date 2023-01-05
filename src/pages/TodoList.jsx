import React, { Component } from 'react';
import ListItem from '../components/ListItem';
import axios from 'axios';

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

  state = {
    data: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    // fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then((response) => response.json())
    //   .then((json) => this.setState({ data: json }))
    //   .catch((e) => console.log(e.message))

    //   .finally(() => this.setState({ isLoading: false }));

    // axios
    //   .get('https://jsonplaceholder.typicode.com/todos')
    //   .then(({ data }) => {
    //     this.setState({ data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .finally(() => {
    //     this.setState({ isLoading: false });
    //   });

    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
      this.setState({ data, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          'Loading....'
        ) : (
          <ul style={{ overflowX: 'auto' }}>
            {this.state.data.map((todo, index) => (
              <ListItem todo={todo} key={todo.title} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}
