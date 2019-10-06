import React from 'react';
import styled, { withTheme } from 'styled-components';
import Icon from '../Icon';

const StyledLogo = styled.a`
  color: ${props => (props.theme ? '#FFDC26' : '#fff')};
  display: flex;
  align-items: center;
  text-shadow: ${props => (props.theme.themeType === 'light' ? '3px 4px 5px #000' : 'none')}; 
`;

const Logo = ({ main, standard }) => (
  standard ? (
    <StyledLogo className={`logo-link logo-link--standard`} href="/">
      <Icon name="logo" />
        Real Games
    </StyledLogo>
  ) : (
    <StyledLogo className={`${main ? 'logo-link logo-link--main' : 'logo-link'}`} href="/">
      <Icon name="logo" />
        Real Games
    </StyledLogo>
  )
);


export default withTheme(Logo);
