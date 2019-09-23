import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import AdvantagesPlace from './AdvantagesPlace';
import CardsList from '../CardsList/CardsList';
import ContactForm from '../ContactForm';
import Title from '../ui/Title';
import BackgroundWrapper from '../ui/BackgroundWrapper';
import Icon from '../ui/Icon';
import OurClients from '../OurClients';
import Locations from '../Locations';
import UpcomingEvents from '../UpcomingEvents';
import LocationSmallDevices from '../Locations/LocationSmallDevices';
import Description from '../ui/Description';

import {
  LargeAndUp,
  MediumAndDown,
} from '../../utils/break-points';

import './advantages.scss';

const ListItem = styled.li`
  color: ${data => (data.theme ? data.theme.textColor : '#fff')};
  text-align: center;
  font-size: 16px;
  position: relative;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 80px 80px;
//   background-color: #000;
`;

const ListItemTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

const ListItemIcon = styled(Icon)`
  max-width: 70px;
  color: ${data => (data.theme.themeType === 'light' ? data.theme.primaryBg : data.theme.titleColor)}
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
    <BackgroundWrapper>
      <UpcomingEvents />
    </BackgroundWrapper>
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
        <Title primary level={2}>
          Наши услуги
        </Title>
        <Description align="center">
          9 лет опыта в организации разных мероприятий, 6 лет из них по направлению «экстрим».
        </Description>
        <ul className="advantage__place">
          {
            services && services.map(item => (
              <ListItem key={item.id}>
                <div className="advantage__icon">
                  <ListItemIcon name={item.iconName} />
                </div>
                <ListItemTitle>
                  <span>{item.title}</span>
                </ListItemTitle>
              </ListItem>
            ))
          }
        </ul>
      </section>
      <Title primary level={2}>
          Преимущества
      </Title>
      <section className="flex wrapper">
        <AdvantagesPlace advantages={advantages} />
      </section>
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
