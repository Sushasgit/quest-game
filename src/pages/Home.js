import React from 'react';
import styled from 'styled-components';
import Advantages from '../components/Advantages/Advantages';

import '../components/Banner/banner.scss';
import Banner from '../components/Banner/Banner';
import Menu from '../components/Menu';
import Icon from '../components/ui/Icon';

const StyledLogo = styled.a`
  color: ${data => (data.theme ? '#FFDC26' : '#fff')};
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.3;
  }
`;

const Home = () => (
  <React.Fragment>
    <div className="wrap">
      <Banner title="Территория реальных игр">
        <StyledLogo className="logo-link" href="/">
          <Icon name="logo" />
            Real Games
        </StyledLogo>
        <Menu />
      </Banner>
    </div>
    <Advantages />
  </React.Fragment>
);

export default Home;
