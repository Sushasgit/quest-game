import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TimelineLite, Power2, Power1 } from 'gsap';
import Observed from 'react-observed';

import './banner.scss';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.animateMe = React.createRef();
    this.theTween = new TimelineLite({ paused: true });
    this.preLoadedImage = React.createRef();
  }

  componentDidMount() {
    if (this.preLoadedImage) {
      this.animate();
      this.theTween.play();
    }
  }

  animate() {
    this.theTween
      .to('.part05', 4, { y: '-=120' }, 0).delay(2.5)
      .to('.part04', 5.75, { y: '-=70' }, 0).delay(3)
      .to('.part03', 5.8, { y: '+=120' }, 3)
      .to('.part02', 6, { y: '+=40' }, 3)
      .to('.l8', 1.5, { scale: 1.1 }, 0)
      .delay(3)
      .to('.part01', 5, { y: '+=40' }, 7)
      .delay(4)
      .to('.part06', 3, { y: '-=60' }, 0)
      .delay(2)
      .to('.sun', 5, {
        bezier: {
          values: [
            { x: 0, y: 0 },
            { x: -150, y: 0 },
            { x: -350, y: 350 },
          ],
        },
        ease: Power2.easeOut,
      }, 0)
      .delay(2)
      .to('h1', 2, { autoAlpha: 1, y: '+=50' }, 0)
      .delay(2)
      .to('.l11', 3, {
        bezier: {
          type: 'soft',
          values: [
            { x: 900, y: 30 },
            { x: 700, y: 100 },
            { x: 500, y: 0 },
            { x: 300, y: 100 },
            { x: 100, y: 180 }],
          autoRotate: false,
          ease: Power1.easeInOut,
        },
      })
      .to('.l12', 0.6, { rotation: 20 }, '-=3')
      .to('.l13', 1, { rotation: -30, ease: Power1.easeInOut }, '-=2.4');
  }

  clearAnimate() {
    this.theTween.restart(true, false);
  }

  render() {
    const { title } = this.props;
    return (
      <React.Fragment>
        <div className="wrap">
          <Observed
            intersectionRatio={0.45}
            onEnter={() => { this.animate(); }}
            onExit={() => { this.clearAnimate(); }}
            options={{
              root: null,
              rootMargin: '0px',
              threshold: 0.9,
            }}
          >
            {({ mapRef }) => (
              <div style={{ height: '100vh' }}>
                <div id="arizona" ref={mapRef}>
                  <div ref={this.animateMe} id="wrapper">
                    <div className="sun banner__layer l10" />
                    <div className="banner__layer l12" />
                    <div className="banner__layer l11" />
                    <div className="banner__layer l13" />
                    <div className="banner__layer l8" />
                    <div className="banner__layer l7" />
                    <div className="banner__layer l6" />
                    <div className="parts part05 banner__layer l5" />
                    <div className="parts part04 banner__layer l4" />
                    <div className="parts part03 banner__layer l3" />
                    <div className="parts part02 banner__layer l2" />
                    <div ref={this.preLoadedImage} className="parts part01 banner__layer l1" />
                    <div id="night" />
                    <div id="sun" />
                  </div>
                  <h1 className="neon">{title}</h1>
                </div>
              </div>
            )}
          </Observed>
        </div>
      </React.Fragment>
    );
  }
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
};


export default Banner;
