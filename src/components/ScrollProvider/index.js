import React from 'react';
// import { render } from 'react-dom';
import PropTypes from 'prop-types';

class ScrollProvider extends React.Component {
  constructor() {
    super();
    this.state = { };
    this.onScrollChanged = this.onScrollChanged.bind(this);
  }

  getChildContext() {
    return {
      posX: this.state.posX,
      posY: this.state.posY
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollChanged, {
      passive: true,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollChanged, {
      passive: true,
    });
  }

  onScrollChanged(e) {
    if (window.pageYOffset <= 600) {
      this.setState({ posX: window.pageXOffset, posY: window.pageYOffset });
    }
  }
  render() {
    return this.props.children
  }
}

ScrollProvider.childContextTypes = {
  posX: PropTypes.number,
  posY: PropTypes.number,
};

export default ScrollProvider;
