import './style.css';
import { NavL, NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <h1>Logo</h1>
      <ul>
        <li>
          <NavLink style={({ isActive }) => (isActive ? { color: 'red' } : {})} to='/'>
            home
          </NavLink>
        </li>

        <li>
          <NavLink to='/counters'>{({ isActive }) => (isActive ? 'active counters' : 'counters')}</NavLink>
        </li>

        <li>
          <NavLink className={({ isActive }) => (isActive ? 'counters-active' : '')} to='/todo'>
            todo
          </NavLink>
        </li>

        <li>
          <NavLink to='/form'>form</NavLink>
        </li>

        <li>
          <NavLink to='/new'>new</NavLink>
        </li>

        <li>
          <NavLink to='/posts'>posts</NavLink>
        </li>
      </ul>
      {props.myAction}
    </header>
  );
};

export default Header;
