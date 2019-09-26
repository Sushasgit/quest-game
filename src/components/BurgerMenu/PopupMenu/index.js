import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import data from '../../../data/menu-links.json';

import './popup.scss';


const NavbarList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: ${props => (props.theme ? props.theme.contactForm.bgForm : '#fff')};
  padding: 10px;
`;

const LinkStyled = styled(Link)`
  color: ${props => (props.theme ? props.theme.titleColor : '#fff')};
  transition: opacity 0.3s linear; 

  &:hover {
    opacity: 0.3;
  }
`;

const PopupMenu = ({ mobile }) => {
  const linksColorModifier = mobile ? 'has-text-link' : 'has-text-white';
  const styleClasses = `navbar__link ${linksColorModifier}`;
  return (
    <NavbarList className="navbar__list">
      {
        data && data.map(item => (
          <li className={styleClasses}>
            <LinkStyled to={item.url}>{item.name}</LinkStyled>
          </li>
        ))
      }
    </NavbarList>
  );
};

PopupMenu.defaultProps = {
  mobile: false,
};

PopupMenu.propTypes = {
  mobile: PropTypes.bool,
};


export default PopupMenu;
