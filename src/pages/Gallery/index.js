import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withTheme } from 'styled-components';
import Gallery from 'react-grid-gallery';

import Title from '../../components/ui/Title';
import Banner from '../../components/Banner';
import BackgroundWrapper from '../../components/ui/BackgroundWrapper';
import Menu from '../../components/Menu';
import Logo from '../../components/ui/Logo';

import data from '../../data/mainPage.json';

import './gallery.scss';

class GalleryModal extends Component {
  styleSmall = () => ({
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  });

  render() {
    const { match } = this.props;
    const id = match.params.id;
    const location = data.ourLocations.list.find(item => item.id === +id);
    return (
      <div className="wrap">
        <Banner title="Галерея">
          <Logo />
          <Menu />
        </Banner>
        <BackgroundWrapper withBuildings>
          <section className="wrapper bg">
            <Title level={2} primary>
              {location.title}
            </Title>

            <Gallery
              thumbnailStyle={this.styleSmall}
              images={location ? location.images : []}
            />
          </section>
        </BackgroundWrapper>
      </div>
    );
  }
}

GalleryModal.defaultProps = {
  match: {},
};

GalleryModal.propTypes = {
  match: PropTypes.oneOfType({}),
};


export default withRouter(withTheme(GalleryModal));
