import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withTheme } from 'styled-components';
import Gallery from 'react-grid-gallery';

import Title from '../../components/ui/Title';
import Banner from '../../components/Banner';
import BackgroundWrapper from '../../components/ui/BackgroundWrapper';
import Menu from '../../components/Menu';
import Logo from '../../components/ui/Logo';

import data from '../../data/mainPage.json';
import generalGallery from '../../data/generalGallery.json';
import {
  LargeAndUp,
  MediumAndDown,
} from '../../utils/break-points';

import './gallery.scss';
import Locations from '../../components/Locations';
import LocationSmallDevices from '../../components/Locations/LocationSmallDevices';
import OurServices from '../../components/OurServices';
import ContactForm from '../../components/ContactForm';
import PriceTabs from '../../components/PriceTabs';
import GamesTabs from '../../components/GamesTabs';
import AdvantagesPlace from '../../components/Advantages/AdvantagesPlace';

class GalleryModal extends Component {
  styleSmall = () => ({
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  });

  render() {
    const { match, theme } = this.props;
    const id = match.params.id;

    console.log(this.props)
    const location = id === 'all' ? generalGallery : data.ourLocations.list.find(item => item.id === +id);
    return (
      <div>
        <div style={{ backgroundColor: theme.primaryBg }} className="wrap">
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
                enableImageSelection={false}
              />
            </section>
          </BackgroundWrapper>
        </div>
        <BackgroundWrapper>
          <MediumAndDown>
            <LocationSmallDevices locations={data.ourLocations} />
          </MediumAndDown>
          <LargeAndUp>
            <Locations locations={data.ourLocations} />
          </LargeAndUp>
        </BackgroundWrapper>
        <BackgroundWrapper>
          <OurServices services={data.ourGames.services} />
          <Title level={3}>
            Преимущества
          </Title>
          <AdvantagesPlace />
          <Title primary level={2}>
            Наши цены
          </Title>
          <PriceTabs />
          <Title primary level={2}>
            Наши игры
          </Title>
          <GamesTabs />
          <ContactForm />
        </BackgroundWrapper>
      </div>
    );
  }
}

GalleryModal.defaultProps = {
  match: {},
};


export default withRouter(withTheme(GalleryModal));
