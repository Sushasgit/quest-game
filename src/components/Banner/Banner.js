import React from 'react';

import Header from '../Header/Header';
import './banner.scss';

const Banner = () => (
  <React.Fragment>
    <div className="parallax__layer l6">
      <Header />
      <div className="box">
        <h1 href="/" className="neon">Территория реальных игр</h1>
      </div>
    </div>
    <div className="parallax__layer l5" />
    <div className="parallax__layer l4" />
    <div className="parallax__layer l3" />
    <div className="parallax__layer l2" />
  </React.Fragment>
);

export default Banner;
