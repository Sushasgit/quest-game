import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import BurgerMenu from '../BurgerMenu';
import Icon from '../ui/Icon';

import menuData from '../../data/menu-links.json';

import './menu.scss';

const LinkTitle = styled.span`
  color: ${props => (props.theme ? props.theme.menu.titleColor : '#fff')};
  transform: translateX(300%);
  display: inline-block;
`;

const StyledIcon = styled.div`
  color: ${props => (props.theme ? props.theme.menu.textColor : '#fff')};
  background-color: ${props => (props.theme ? props.theme.menu.bgColor : '#fff')};
  box-shadow: 0px 0px 4px 4px ${props => (props.theme ? props.theme.menu.textColor : '#fff')};
  display: inline-block;
  width: 55px;
  height: 55px;
  text-align: center;
  padding: 12px;
  border-radius: 50%;
  transition: all 1s linear;
  margin-right: 20px;
  margin-bottom: 10px;
`;

const Menu = () => (
  <React.Fragment>
    <ul className="menu menu--desktop">
      {
        menuData && menuData.map(item => (
          <li key={item.id} className="menu__link">
            <Link to={item.url}>
              <StyledIcon>
                <Icon name={item.iconName} />
              </StyledIcon>
              <LinkTitle>{item.name}</LinkTitle>
            </Link>
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
