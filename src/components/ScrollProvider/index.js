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
    window.addEventListener('scroll', this.onScrollChanged);
  }

  onScrollChanged(e) {
      console.log(e)
    this.setState({ posX: window.pageXOffset, posY: window.pageYOffset });
  }

  render() {
      console.log('thisState', this.state)
    return this.props.children
  }
}

ScrollProvider.childContextTypes = {
  posX: PropTypes.number,
  posY: PropTypes.number,
};

export default ScrollProvider;
