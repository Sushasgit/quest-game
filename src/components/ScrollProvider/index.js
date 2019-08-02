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

  debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
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
      this.debounce(this.setState({ posX: window.pageXOffset, posY: window.pageYOffset }), 200, true);
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
