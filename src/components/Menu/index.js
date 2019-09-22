import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import BurgerMenu from '../BurgerMenu';
import Icon from '../ui/Icon';

import menuData from '../../data/menu-links.json';

import './menu.scss';

const StyledLink = styled(Link)`
  color: ${props => (props.theme ? props.theme.menu.textColor : '#fff')};
  background-color: ${props => (props.theme ? props.theme.menu.bgColor : '#fff')};
  box-shadow: 0px 0px 4px 4px ${props => (props.theme ? props.theme.menu.textColor : '#fff')};
  &:hover {
    opacity: 0.4;
  }
`;

const LinkTitle = styled.span`
  color: ${props => (props.theme ? props.theme.menu.titleColor : '#fff')};
`;

const Menu = () => (
  <React.Fragment>
    <ul className="menu menu--desktop">
      {
        menuData && menuData.map(item => (
          <li key={item.id} className="menu__link">
            <StyledLink to={item.url}>
              <Icon name={item.iconName} />
            </StyledLink>
            <LinkTitle>{item.name}</LinkTitle>
          </li>
        ))
      }
    </ul>
    <div className="menu menu--mobile">
      <BurgerMenu />
    </div>
  </React.Fragment>
);

export default Menu;
