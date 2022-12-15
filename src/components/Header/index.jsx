import './style.css';

const Header = (props) => {
  return (
    <header>
      <h1>Logo</h1>
      <ul>
        <li className={props.myPage === 'home' ? 'active' : ''}>
          <a href='/#'>home</a>
        </li>
        <li className={props.myPage === 'about' ? 'active' : ''}>
          <a href='/#'>about</a>
        </li>
        <li className={props.myPage === 'contact' ? 'active' : ''}>
          <a href='/#'>contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
