import React from 'react';
import styled from 'styled-components';
import Advantages from '../components/Advantages/Advantages';

import Banner from '../components/Banner/Banner';
import Menu from '../components/Menu';
import Icon from '../components/ui/Icon';

import data from '../data/mainPage.json';

import '../components/Banner/banner.scss';

const StyledLogo = styled.a`
  color: ${props => (props.theme ? '#FFDC26' : '#fff')};
  display: flex;
  align-items: center;
`;

const Home = () => (
  <React.Fragment>
    <div className="wrap">
      <Banner title={data.mainTitle}>
        <StyledLogo className="logo-link" href="/">
          <Icon name="logo" />
            Real Games
        </StyledLogo>
        <Menu />
      </Banner>
    </div>
    <Advantages
      ourLocations={data.ourLocations}
      services={data.ourGames.services}
      gamesList={data.ourGames}
    />
  </React.Fragment>
);

export default Home;
