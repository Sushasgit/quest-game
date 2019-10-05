import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import AdvantagesPlace from './AdvantagesPlace';
import CardsList from '../CardsList/CardsList';
import ContactForm from '../ContactForm';
import Title from '../ui/Title';
import BackgroundWrapper from '../ui/BackgroundWrapper';
import OurClients from '../OurClients';
import Locations from '../Locations';
import UpcomingEvents from '../UpcomingEvents';
import LocationSmallDevices from '../Locations/LocationSmallDevices';

import {
  LargeAndUp,
  MediumAndDown,
} from '../../utils/break-points';

import './advantages.scss';
import OurServices from '../OurServices';

const TransparentBgLight = styled.div`
  background-color: ${data => (data.theme ? data.theme.titleColor : '#fff')};
  min-height: 400px;

  @media(max-width: 961px) {
      display: none;
  }
`;

const TransparentBgDark = styled.div`
  background-color: ${data => (data.theme ? data.theme.primaryBg : '#fff')};
  min-height: 400px;

  @media(max-width: 961px) {
    display: none;
}
`;

const Advantages = ({
  services,
  gamesList,
  ourLocations,
  advantages,
  theme,
}) => (
  <React.Fragment>
    <BackgroundWrapper withBuildings>
      <CardsList main gamesList={gamesList} />
    </BackgroundWrapper>

    <TransparentBgLight />

    <BackgroundWrapper>
      <UpcomingEvents />
    </BackgroundWrapper>

    <TransparentBgDark />

    <BackgroundWrapper>
      <MediumAndDown>
        <LocationSmallDevices locations={ourLocations} />
      </MediumAndDown>
      <LargeAndUp>
        <Locations locations={ourLocations} />
      </LargeAndUp>
    </BackgroundWrapper>

    <BackgroundWrapper>
      <section className="wrapper">
        <OurServices services={services} />
      </section>
      <Title primary level={2}>
          Преимущества
      </Title>
      <AdvantagesPlace advantages={advantages} />
      <div
        style={{ filter: theme.themeType === 'light' ? 'grayscale(1)' : 'none' }}
        className="test-bg"
      />
      <BackgroundWrapper withBuildings>
        <OurClients games={gamesList} />
      </BackgroundWrapper>
      <BackgroundWrapper className="bg">
        <ContactForm />
      </BackgroundWrapper>
    </BackgroundWrapper>
  </React.Fragment>
);

Advantages.propTypes = {
  gamesList: PropTypes.shape({
    title: PropTypes.string,
    games: PropTypes.array,
  }).isRequired,
  ourLocations: PropTypes.shape({
    title: PropTypes.string,
    games: PropTypes.array,
  }).isRequired,
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withTheme(Advantages);
