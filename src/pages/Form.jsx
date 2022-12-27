import React, { Component } from 'react';
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

  handleSubmit = (e) => {
    e.preventDefault();

    this.schema
      .validate({ name: 'moh', email: 'moh@mog.com', password: '123', rePassword: '123', inChecked: true }, { abortEarly: false })
      .then(() => {
        console.log('valid');
        this.setState((prevState) => ({ myData: { name: prevState.name, email: prevState.email, password: prevState.password }, ...defaults }));
      })
      .catch((e) => console.log(e.errors));
  };

  handleChangeInput = (e) => {
    const { value, id } = e.target;
    this.setState({ [id]: value });
  };

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
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

        <button type='submit'>Submit</button>
        <button type='button' onClick={this.handleRandomValues}>
          Random Values
        </button>
      </form>
    );
  }
}
