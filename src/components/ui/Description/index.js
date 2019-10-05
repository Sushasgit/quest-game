import React from 'react';
import styled, { withTheme } from 'styled-components';

const DescriptionStyled = styled.p`
    color: ${props => (props.theme ? props.theme.textColor : '#fff')};
    font-size: 20px;
    margin: 40px 0;
    line-height: 28px;
    text-align: ${props => (props.textAlign)}

    @media(max-width: 800px) {
        font-size: 16px;
        text-align:center;
    }
`;

const Description = ({ children, align = 'left' }) => (
  <DescriptionStyled textAlign={align}>
      {children}
  </DescriptionStyled>
);


export default withTheme(Description);
