import './style.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

class Header extends React.Component {
  state = { username: '' };
  componentDidMount() {
    const username = localStorage.getItem('username');
    this.setState({ username });
  }
  render() {
    return (
      <header>
        <h1>Logo</h1>
        <p>Hello {this.state.username}</p>
        <ul>
          <li>
            <NavLink to='/dashboard/'>home</NavLink>
          </li>

          <li>
            <NavLink to='/dashboard/info'>Info</NavLink>
          </li>

          <li>
            <button onClick={this.props.logout}>logout</button>
          </li>
        </ul>
        {this.props.myAction}
      </header>
    );
  }
}

export default Header;
