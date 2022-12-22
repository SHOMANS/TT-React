import React, { Component } from 'react';

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

  handleRandomValues = () => {
    this.setState((prevState) => ({ name: prevState.myData.name, email: prevState.myData.email, password: prevState.myData.password }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit', this.state);
    this.setState((prevState) => ({ myData: { name: prevState.name, email: prevState.email, password: prevState.password }, ...defaults }));
  };

  // handleChangeName = (e) => {
  //   console.log('name change', e.target.value);
  //   this.setState({ name: e.target.value });
  // };

  // handleChangeEmail = (e) => {
  //   console.log('email change', e.target.value);
  //   this.setState({ email: e.target.value });
  // };

  // handleChangePassword = (e) => {
  //   console.log('password change', e.target.value);
  //   this.setState({ password: e.target.value });
  // };

  handleChangeInput = (e) => {
    const { value, id } = e.target;

    // const value = e.target.value;
    // const id = e.target.id;

    // console.log(value, id);

    this.setState({ [id]: value });
  };

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <label htmlFor='name'>Name </label>
          <input required id='name' type='text' placeholder='enter name' onChange={this.handleChangeInput} value={this.state.name} />
        </div>

        <br />

        <div>
          <label htmlFor='email'>Email </label>
          <input required id='email' type='email' placeholder='enter email' onChange={this.handleChangeInput} value={this.state.email} />
        </div>

        <br />

        <div>
          <label htmlFor='password'>Password </label>
          <input required id='password' type='password' placeholder='enter password' onChange={this.handleChangeInput} value={this.state.password} />
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
