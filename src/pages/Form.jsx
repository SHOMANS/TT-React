import axios from 'axios';
import React, { Component } from 'react';
// import { Navigate } from 'react-router-dom';
import { object, string } from 'yup';

// const regularExpression = /^(?=.*[0-9])([a-z]){6,16}$/;

export default class Form extends Component {
  state = {
    email: '',
    password: '',
    // isLoggingIn: false, // no longer used
    isLoading: false,
    errors: [],
  };

  schema = object().shape({
    email: string().required(),
    password: string().required(),
  });

  handleRandomValues = () => {
    this.setState((prevState) => ({ name: prevState.myData.name, email: prevState.myData.email, password: prevState.myData.password }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ isLoading: true });
    this.schema
      .validate({ email: this.state.email, password: this.state.password }, { abortEarly: false })
      .then(async ({ email, password }) => {
        console.log(email, password);
        const res = await axios.post('https://dummyjson.com/auth/login', {
          username: email,
          password,
        });

        // console.log(res.data);
        // console.log(res.data.token);

        if (res) {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('username', res.data.username);
          this.props.login();
        }
      })
      .catch((error) => {
        if (error.errors) {
          this.setState({ errors: error.errors });
        } else {
          this.setState({ errors: [error.message] });
        }
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  handleChangeInput = (e) => {
    const { value, id } = e.target;
    this.setState({ [id]: value });
  };

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          {this.state.errors.map((error) => (
            <span style={{ color: 'red' }}>{error}</span>
          ))}
        </div>

        <br />

        <div>
          <label htmlFor='email'>Email </label>
          <input id='email' type='text' placeholder='enter email' onChange={this.handleChangeInput} value={this.state.email} />
        </div>

        <br />

        <div>
          <label htmlFor='password'>Password </label>
          <input id='password' type='password' placeholder='enter password' onChange={this.handleChangeInput} value={this.state.password} />
        </div>

        <br />

        <button type='submit'>{this.state.isLoading ? 'Loading...' : 'Submit'}</button>

        {/* {this.state.isLoggingIn ? <Navigate to='/' /> : ''} no longer useful */}
      </form>
    );
  }
}
