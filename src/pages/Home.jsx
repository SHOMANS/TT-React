import axios from 'axios';
import React from 'react';
import Container from '../components/Container';
import { API_URL } from '../config/api';

class HomePage extends React.Component {
  // state = {
  //   isMounted: true,
  // };

  // componentDidMount() {
  //   axios.get('https://react-tt-api.onrender.com/api/users/profile', {
  //     headers: {
  //       Authorization:
  //         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmMzYTlkMWQ1MjI3MDgxNzBlZjY4YiIsImlhdCI6MTY3MzM0NDA2MywiZXhwIjoxNjc1OTM2MDYzfQ.-Ptt16-hcx2Z4lWvnWP2WoRgLqgPiFFf6KDXmRLj9i4',
  //     },
  //   });
  // }

  // componentDidMount() {
  //   const token = localStorage.getItem('token');
  //   axios.get(`${API_URL}/users/profile`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  // }

  // input1 = React.createRef();
  // input2 = React.createRef();
  // input3 = React.createRef();
  // input4 = React.createRef();

  state = { refs: [] };

  arr = [...Array(10)];

  componentDidMount() {
    this.setState({ refs: this.arr.map(() => React.createRef()) });
  }

  change = (id) => {
    console.log(this['input' + id]);
    this.state.refs[id].current.focus();
  };

  render() {
    console.log(this.arr);
    return (
      <div>
        <Container className='my-container'>
          <h2>Home Page</h2>

          {this.arr.map((item, index) => (
            <input ref={this.state.refs[index]} onChange={() => this.change(index + 1)} />
          ))}

          {/* <input ref={this.input1} onChange={() => this.change(2)} />
          <input ref={this.input2} onChange={() => this.change(3)} />
          <input ref={this.input3} onChange={() => this.change(4)} />
          <input ref={this.input4} onChange={() => this.change(1)} /> */}

          {/* <button onClick={this.click}>click</button> */}
        </Container>
      </div>
    );
  }
}

export default HomePage;
