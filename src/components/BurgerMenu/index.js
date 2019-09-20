import React from 'react';
import styled from 'styled-components';
import PopupMenu from './PopupMenu';

import './burger-menu.scss';


const BurgerButton = styled.button`
  color: ${data => (data.theme ? data.theme.titleColor : '#fff')};
`;

class BurgerMenu extends React.Component {
  state = {
    activeMenu: false,
  }

  handleOpenMenu = () => this.setState(prevState => ({
    activeMenu: !prevState.activeMenu,
  }))

  render() {
    const { activeMenu } = this.state;
    const activeMenuStyleClass = activeMenu ? 'is-active' : '';
    const burgerMenuStyleClasses = `navbar__burger burger ${activeMenuStyleClass}`;
    return (
      <nav className="navbar">
        <BurgerButton aria-label="menu" type="button" className={burgerMenuStyleClasses} onClick={this.handleOpenMenu}>
          <svg width="60" height="35">
            <g className={`icon ${activeMenuStyleClass}`}>
              <rect className="frstbar" x="10" y="5" width="40" height="6" rx="3" ry="3" fill="currentColor" />
              <rect className="scndbar" x="10" y="15" width="40" height="6" rx="3" ry="3" fill="currentColor" />
              <rect className="thrdbar" x="10" y="25" width="40" height="6" rx="3" ry="3" fill="currentColor" />
            </g>
          </svg>
        </BurgerButton>
        {
            activeMenu ? (
              <PopupMenu
                onMenuClick={this.handleOpenMenu}
                active={activeMenu}
              />
            ) : null
        }
      </nav>
    );
  }
}

export default BurgerMenu;
