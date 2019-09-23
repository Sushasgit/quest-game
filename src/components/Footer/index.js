import React from 'react';
import styled from 'styled-components';


const StyledFooter = styled.footer`
    text-align: center;
    padding-top: 20px;
    padding-bottom: 10px;
    font-size: 16px;
    color: ${props => props.theme.titleColor};
    background-color: ${props => props.theme.primaryBg};
    position: relative;
    z-index: 200;
`;

const Footer = () => (
  <StyledFooter className="footer">
     @All rights reserved 2019
  </StyledFooter>
);

export default Footer;
