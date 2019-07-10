import React from 'react';

import Header from '../Header/Header';
import './banner.scss';

const Banner = () => (
  <React.Fragment>
    <div className="parallax__layer l6">
      <Header />
      <div className="box">
        <a href="/" className="glitch">Територия реальных игр</a>
      </div>
    </div>
    <div className="parallax__layer l5" />
    <div className="parallax__layer l4" />
    <div className="parallax__layer l3" />
    <div className="parallax__layer l2" />
    <div className="parallax__layer l1" />
  </React.Fragment>
);

export default Banner;
