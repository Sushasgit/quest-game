import React from 'react';
import { Link } from 'react-router-dom';

import './popup.scss';

const PopupMenu = ({ onClick, mobile }) => {
  const linksColorModifier = mobile ? 'has-text-link' : 'has-text-white';
  const styleClasses = `navbar__link ${linksColorModifier}`;
  return (
    <ul className="navbar__list">
      <li className={styleClasses}>
        <Link onClick={onClick} to="/">Корпоративы</Link>
      </li>
      <li className={styleClasses}>
        <Link onClick={onClick} to="/">Цены</Link>
      </li>

      <li className={styleClasses}>
        <Link onClick={onClick} to="/">Контакты</Link>
      </li>
    </ul>
  );
};

export default PopupMenu;
