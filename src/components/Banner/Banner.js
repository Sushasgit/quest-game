
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import './banner.scss';

const Layer = styled.div`
  transform: translate3d(0px,${props => props.position ? props.position : '0'}px, 0px);
`;

const LayerPosition = styled.div`
  transform: translate3d(0px,${props => props.position ? props.position : '0'}px, 0px);
  background-position: 
    ${props => props.bottom ? 'bottom' : 'top'} 
    ${props => props.rightSide ? 'right' : 'left'} 
    ${props => props.posY ? props.posY : '0'}px;
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
        <Layer position={posY * 20 / 100}>
          <div className="box">
            <h1 className="neon">
              Территория реальных игр
            </h1>
          </div>
        </Layer>
        <LayerPosition posY={posY} position={posY * 100 / 100} className="banner__layer parallax l9" />
        <LayerPosition
          bottom
          rightSide
          posY={posY * -1}
          position={posY * 4 / 100}
          className="banner__layer parallax l8"
        />
        <Layer position={posY * 80 / 100} className="banner__layer parallax l7" />
        <Layer position={posY * 60 / 100} className="banner__layer parallax l6" />
        <Layer position={posY * 55 / 100} className="banner__layer parallax l5" />
        <Layer position={posY * 35 / 100} className="banner__layer parallax l4" />
        <Layer position={posY * 25 / 100} className="banner__layer parallax l3" />
        <Layer position={posY * 10 / 100} className="banner__layer parallax l2" />
        <Layer position={posY * 1 / 100} className="banner__layer parallax l1" />
      </div>
    );
  }
}

Banner.contextTypes = {
  posX: PropTypes.number,
  posY: PropTypes.number,
};


export default Banner;
