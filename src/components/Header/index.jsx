import './style.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <h1>Logo</h1>
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>

        <li>
          <Link to='/counters'>counters</Link>
        </li>

        <li>
          <Link to='/todo'>todo</Link>
        </li>

        <li>
          <Link to='/form'>form</Link>
        </li>

        <li>
          <Link to='/new'>new</Link>
        </li>

        <li>
          <Link to='/posts'>posts</Link>
        </li>
      </ul>
      {props.myAction}
    </header>
  );
};

export default Header;
