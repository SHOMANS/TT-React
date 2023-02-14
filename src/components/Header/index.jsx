import './style.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import ToggleButton from '../ToggleButton';
import i18n from '../../utils/i18next';

class Header extends React.Component {
  changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';

    localStorage.setItem('lang', newLang);
    i18n.changeLanguage(newLang);
  };

  render() {
    console.log(i18n.language);
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
          <ToggleButton />
          <div>
            <button onClick={this.changeLanguage}>Change Lang</button>
          </div>
        </ul>
      </header>
    );
  }
}

export default Header;
