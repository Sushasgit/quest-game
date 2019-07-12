import React from 'react';
import logo from '../../images/logo-real.png';

import './header.scss';

const Header = () => (
  <header className="header">
    <a className="header__logo" href="/">
      <img src={logo} alt="real games logo" />
        Real Games
    </a>
  </header>
);

export default Header;
