import React from 'react';
import styled, { withTheme } from 'styled-components';
import Icon from '../Icon';

const StyledLogo = styled.a`
  color: ${props => (props.theme ? '#FFDC26' : '#fff')};
  display: flex;
  align-items: center;
`;

const Logo = ({ main }) => (
  <StyledLogo className={`${main ? 'logo-link logo-link--main' : 'logo-link'}`} href="/">
    <Icon name="logo" />
        Real Games
  </StyledLogo>
);


export default withTheme(Logo);
