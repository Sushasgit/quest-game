
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import logo from '../../images/logo-real.png';

import './banner.scss';
import Menu from '../Menu';

const Layer = styled.div`
  transform: translate3d(0px,${props => (Math.round(props.position) ? Math.round(props.position) : '0')}px, 0px);
`;

const LayerPosition = styled.div`
  transform: translate3d(${props => (Math.round(props.positionX) ? Math.round(props.positionX) : '0')}px, ${props => (Math.round(props.positionY) ? Math.round(props.positionY) : '0')}px, ${props => (Math.round(props.positionZ) ? Math.round(props.positionZ) : '0')}px)
 scale(${props => props.scaleX ? props.scaleX : '1'});
    
  background-position: 
    ${props => (props.bottom ? 'bottom' : 'top')} 
    ${props => (props.rightSide ? 'right' : 'left')} 
    ${props => (props.posY ? Math.round(props.posY) : '0')}px;
`;

class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { posY } = this.context;
    return (
      <div className="banner">
        <LayerPosition posY={posY} positionY={posY} className="banner__layer parallax l10" />
        <LayerPosition posY={posY} positionY={posY * 100 / 15} scaleX={posY / 100 + 1} className="banner__layer parallax l12" />
        <Layer position={posY * 20 / 100}>
          <div className="box">
            <h1 className="neon">
              Территория реальных игр
            </h1>
          </div>
        </Layer>
        <LayerPosition posY={posY} positionY={posY * 100 / 90} positionX={posY * 5} scaleX={posY / 270 + 1} className="banner__layer parallax l11" />
        <LayerPosition posY={posY} positionY={posY * 100 / 160} positionX={posY * 10} scaleX={posY / 100 + 1} className="banner__layer parallax l13" />
        <LayerPosition
          bottom
          rightSide
          posY={posY * -1}
          position={posY * 4 / 100}
          className="banner__layer parallax l8"
        />
        <Layer position={posY * 80 / 100} className="banner__layer parallax l7" />
        <Layer position={posY * 60 / 100} className="banner__layer parallax l6" />
        <LayerPosition bottom posY={posY * 3} positionY={posY * 55 / 100} className="banner__layer parallax l5" />
        <Layer position={posY * 35 / 100} className="banner__layer parallax l4" />
        <Layer position={posY * 25 / 100} className="banner__layer parallax l3" />
        <Layer position={posY * 10 / 100} className="banner__layer parallax l2" />
        <Layer position={posY * 1 / 100} className="banner__layer parallax l1">
          <a className="logo-link" href="/">
            <img src={logo} alt="logo" />
          </a>
          <Menu />
        </Layer>
      </div>
    );
  }
}

Banner.contextTypes = {
  posX: PropTypes.number,
  posY: PropTypes.number,
};


export default Banner;
