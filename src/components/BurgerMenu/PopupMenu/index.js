import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './popup.scss';


const NavbarList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: ${data => (data.theme ? data.theme.contactForm.bgForm : '#fff')};
  padding: 10px;
`;

const LinkStyled = styled(Link)`
  color: ${data => (data.theme ? data.theme.titleColor : '#fff')};
  transition: opacity 0.3s linear; 

  &:hover {
    opacity: 0.3;
  }
`;

const PopupMenu = ({ onClick, mobile }) => {
  const linksColorModifier = mobile ? 'has-text-link' : 'has-text-white';
  const styleClasses = `navbar__link ${linksColorModifier}`;
  return (
    <NavbarList className="navbar__list">
      <li className={styleClasses}>
        <LinkStyled onClick={onClick} to="/">Корпоративы</LinkStyled>
      </li>
      <li className={styleClasses}>
        <LinkStyled onClick={onClick} to="/">Цены</LinkStyled>
      </li>

      <li className={styleClasses}>
        <LinkStyled onClick={onClick} to="/">Контакты</LinkStyled>
      </li>
    </NavbarList>
  );
};

PopupMenu.defaultProps = {
  mobile: false,
};

PopupMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
  mobile: PropTypes.bool,
};


export default PopupMenu;
