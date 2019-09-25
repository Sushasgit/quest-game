import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import {
  TimelineLite,
  Power2,
  Power1,
  Sine,
  Back,
} from 'gsap';
import Observed from 'react-observed';

import test2 from '../../images/test2.svg';
import {
  LargeAndUp,
  MediumAndDown,
} from '../../utils/break-points';

import './banner.scss';
import Icon from '../ui/Icon';
import { handleSwitchMan } from '../../utils/func';

const SocialLinks = styled.div`
    position: absolute;
    right: 5px;
    width: 110px;
    top: 15px;
    z-index: 300;

    & a {
        color: ${data => (data.theme ? data.theme.titleColor : '#fff')};
        margin-left: 10px;
        transition: opacity 0.3s linear;

        &:hover {
            opacity: 0.6;
        }
    }

    & svg {
        max-width: 40px;
    }
`;

class Banner extends Component {
  constructor(props) {
    super(props);
    this.animateMe = React.createRef();
    this.theTween = new TimelineLite({ paused: true });

    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    requestAnimationFrame(this.animate);
    this.theTween.play();
  }

  componentWillUpdate(nextProps) {
    const { theme } = this.props;
    if (nextProps.theme && nextProps.theme.themeType !== theme.themeType) {
      this.clearAnimate();
      requestAnimationFrame(this.animate);
      this.theTween.play();
    }
  }

  animate() {
    this.theTween
      .to('.banner__fly--1', 2.5, {
        bezier: {
          type: 'quadratic',
          values: [
            { x: 150, y: 250 },
            { x: 450, y: 100 },
            { x: 600, y: 300 }],
          autoRotate: 90,
        },
        ease: Power1.easeInOut,
      }, 'T1')
      .from('.banner__fly--1', 2.5, {
        scale: 0,
        repeat: 1,
        yoyo: true,
        ease: Sine.easeInOut,
      }, 'T1')
      .to('.banner__fly--1', 2, {
        bezier: {
          type: 'quadratic',
          values: [
            { x: 600, y: 300 },
            { x: 450, y: 400 },
            { x: 150, y: 250 }],
          autoRotate: 90,
        },
        ease: Power1.easeInOut,
      }, 'T2')
      .to('.banner__fly--1', 2.5, {
        scale: 1.5,
        repeat: 1,
        yoyo: true,
        ease: Sine.easeInOut,
      }, 'T2')
      .to('.banner__fly--1', 3, {
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
      .to('.banner__fly--2', 0.6, { rotation: 20, yoyo: true, repeat: 3 }, '-=3')
      .to('.banner__fly--3', 1, { x: -800, ease: Back.easeInOut })
      .to('.banner__fly--3', 0.5, { opacity: 0, ease: Power1.easeInOut })
      .to('.banner__fly--2', 1, { y: -800, ease: Back.easeInOut })
      .to('.banner__fly--2', 0.5, { opacity: 0, ease: Power1.easeInOut })
      .to('.part05', 4, { y: '-=90' }, 0)
      .to('.neon', 4.5, { scale: 1.1 }, 1.5)
      .to('.part01', 5, { y: '-=120' }, 7)
      .to('.part04', 5, { y: '-=90' }, 0)
      .to('.part03', 5.8, { y: '+=100' }, 0)
      .to('.part02', 6, { y: '+=40' }, 3)
      .to('.part08', 1.5, { scale: 1.1 }, 0)
      .to('.part06', 3, { y: '-=60' }, 0)
      .to('.banner__planet', 8, {
        bezier: {
          values: [
            { x: 0, y: 0 },
            { x: 150, y: 0 },
            { x: 350, y: 550 },
          ],
        },
        ease: Power2.easeOut,
      }, 0)
      .delay(4);
  }

  clearAnimate() {
    requestAnimationFrame(() => { this.theTween.restart(true, false); });
  }

  render() {
    const {
      title,
      children,
      theme,
      type,
      main,
    } = this.props;
    console.log(type)
    return (
      <React.Fragment>
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
            <React.Fragment>
              <SocialLinks>
                <a
                  aria-label="Instagram link"
                  href="https://www.instagram.com/projectrealgames/"
                >
                  <Icon name="insta" />
                </a>
                <a
                  aria-label="Facebook link"
                  href="https://www.facebook.com/projectrealgames/"
                >
                  <Icon name="facebook" />
                </a>
              </SocialLinks>
              <LargeAndUp>
                <div
                  style={
                      theme.themeType === 'light' ? {
                        background: `url(${test2})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                      } : {
                        backgroundColor: theme.primaryBg,
                      }}
                  className={`${main ? 'banner banner--main' : 'banner'}`}
                >
                  <div
                    style={{ color: theme.primaryBg }}
                    id="banner__inner"
                    ref={mapRef}
                  >
                    <div ref={this.animateMe} id="wrapper">
                      <Icon
                        name="bg-layer6"
                        className="part05 banner__layer"
                      />
                      {handleSwitchMan(type)}
                      <Icon
                        name="bg-layer3"
                        className="l3 part03 banner__layer"
                      />
                      <Icon
                        name="bg-layer2"
                        className="part02 banner__layer"
                      />
                      <div
                        className={`banner__planet-list ${theme.themeType !== 'dark' ? 'none' : ''}`}
                      >
                        <Icon
                          name="moon"
                          className="banner__planet banner__planet--moon"
                        />
                        <Icon
                          name="bat-1"
                          className="banner__fly banner__fly--1"
                        />
                        <Icon
                          name="bat-2"
                          className="banner__fly banner__fly--2"
                        />
                        <Icon
                          name="bat-3"
                          className="banner__fly banner__fly--3"
                        />
                      </div>
                      <div
                        className={`banner__planet-list ${theme.themeType !== 'light' ? 'none' : ''}`}
                      >
                        <Icon
                          name="bird-1"
                          className="banner__fly banner__fly--1"
                        />
                        <Icon
                          name="bird-2"
                          className="banner__fly banner__fly--2"
                        />
                        <Icon
                          name="bird-3"
                          className="banner__fly banner__fly--3"
                        />
                      </div>
                    </div>
                    <h2 className={`${main ? 'banner__title banner__title--main' : 'banner__title '}`}>
                      {title}
                    </h2>

                  </div>
                  {children}
                </div>
              </LargeAndUp>
              <MediumAndDown>
                <SocialLinks>
                  <a aria-label="Instagram link" href="https://www.instagram.com/projectrealgames/">
                    <Icon name="insta" />
                  </a>
                  <a aria-label="Facebook link" href="https://www.facebook.com/projectrealgames/">
                    <Icon name="facebook" />
                  </a>
                </SocialLinks>
                <div style={{ backgroundColor: `${theme.primaryBg}` }}>
                  <div className={`small-devices ${theme.themeType === 'light' ? 'small-devices--light' : 'small-devices--dark'}`}>
                    <h2 className={`${main ? 'banner__title banner__title--main' : 'banner__title '}`}>
                      {title}
                    </h2>
                    {children}
                  </div>
                </div>
              </MediumAndDown>
            </React.Fragment>
          )}
        </Observed>
      </React.Fragment>
    );
  }
}

Banner.defaultProps = {
  theme: null,
  children: '',
};


Banner.propTypes = {
  title: PropTypes.string.isRequired,
  theme: PropTypes.shape({
    themeType: PropTypes.string,
    textColor: PropTypes.string,
    primaryBg: PropTypes.string,
    titleColor: PropTypes.string,
    toggleButton: PropTypes.object,
    contactForm: PropTypes.object,
    input: PropTypes.object,
    tags: PropTypes.object,
  }),
};


export default withTheme(Banner);
