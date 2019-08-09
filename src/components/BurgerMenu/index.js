import React from 'react';

import PopupMenu from './PopupMenu';

import './burger-menu.scss';

export default class BurgerMenu extends React.Component {
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
        <button aria-label="menu" type="button" className={burgerMenuStyleClasses} onClick={this.handleOpenMenu}>
          <svg width="60" height="35">
            <g className={`icon ${activeMenuStyleClass}`}>
              <rect className="frstbar" x="10" y="5" width="40" height="6" rx="3" ry="3" fill="#FFDC26" />
              <rect className="scndbar" x="10" y="15" width="40" height="6" rx="3" ry="3" fill="#FFDC26" />
              <rect className="thrdbar" x="10" y="25" width="40" height="6" rx="3" ry="3" fill="#FFDC26" />
            </g>
          </svg>
        </button>
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
