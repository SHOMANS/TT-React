import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

const TodoDetails = () => {
  const { id } = useParams();
  return <Details id={id} />;
};

export default TodoDetails;

class Details extends Component {
  state = { data: null, isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(`https://jsonplaceholder.typicode.com/todos/${this.props.id}`)
      .then((response) => response.json())
      .then((json) => this.setState({ data: json }))
      .catch((e) => console.log(e.message))
      .finally(() => this.setState({ isLoading: false }));
  }
  render() {
    return (
      <div>
        <div>id: {this.props.id}</div>
        {this.state.isLoading ? 'Loading....' : <div>title: {this.state.data?.title}</div>}
      </div>
    );
  }
}
