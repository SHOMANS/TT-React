import axios from 'axios';
import React, { Component } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { boolean, object, ref, string } from 'yup';

// const regularExpression = /^(?=.*[0-9])([a-z]){6,16}$/;
const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const initialData = {
  name: 'Abdo',
  email: 'Abdo@gsg.com',
  password: 'abdo123',
};

const defaults = {
  name: '',
  email: '',
  password: '',
};

export default class Form extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    myData: initialData,
    isLoggingIn: false,
  };

  schema = object().shape({
    name: string().min(6, 'Name Should be more than 8').max(16).required(),
    email: string().email().required(),
    password: string().min(8).matches(regularExpression).required(),
    rePassword: string()
      .oneOf([ref('password'), null])
      .required(),
    inChecked: boolean().oneOf([true]).required(),
  });

  handleRandomValues = () => {
    this.setState((prevState) => ({ name: prevState.myData.name, email: prevState.myData.email, password: prevState.myData.password }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // if (this.state.name === 'abdo') this.setState({ isLoggingIn: true });

    const myData = { username: this.state.name, name: this.state.name, email: this.state.email };
    this.setState({ isLoading: true });

    try {
      const res = await axios.post('https://jsonplaceholder.typicode.com/users', myData);
      // console.log(res);
      if (res) {
        this.setState({ isLoggingIn: true });
      }
    } catch (e) {
      console.log(e);
      this.setState({ error: e.message });
    }
    this.setState({ isLoading: false });
  };

  handleChangeInput = (e) => {
    const { value, id } = e.target;
    this.setState({ [id]: value });
  };

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>{this.state.error}</div>
        <div>
          <label htmlFor='name'>Name </label>
          <input id='name' type='text' placeholder='enter name' onChange={this.handleChangeInput} value={this.state.name} />
        </div>

        <br />

        <div>
          <label htmlFor='email'>Email </label>
          <input id='email' type='email' placeholder='enter email' onChange={this.handleChangeInput} value={this.state.email} />
        </div>

        <br />

        <div>
          <label htmlFor='password'>Password </label>
          <input id='password' type='password' placeholder='enter password' onChange={this.handleChangeInput} value={this.state.password} />
        </div>

        <br />

        <button type='submit'>{this.state.isLoading ? 'Loading...' : 'Submit'}</button>
        <button type='button' onClick={this.handleRandomValues}>
          Random Values
        </button>
        {this.state.isLoggingIn ? <Navigate to='/' /> : ''}
      </form>
    );
  }
}
