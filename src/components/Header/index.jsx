import './style.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Logo</h1>
        <ul>
          <li>
            <NavLink to='/'>home</NavLink>
          </li>

          <li>
            <NavLink to='/gifs'>gifs</NavLink>
          </li>

          <li>
            <NavLink to='/counters'>counters</NavLink>
          </li>

          <li>
            <NavLink to='/posts'>posts</NavLink>
          </li>

          <li>
            <NavLink to='/slider'>slider</NavLink>
          </li>

          <li>
            <NavLink to='/todos'>todos</NavLink>
          </li>

          <li>
            <NavLink to='/todo'>todo</NavLink>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
