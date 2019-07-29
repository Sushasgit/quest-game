import React from 'react';
import styled from 'styled-components';

const Title = ({ level, primary, ...props }) => {
  const StyledHeading = styled[`h${level}`]`
    color: ${props => primary ? props.theme.dark.colorYellow : '#fff' };
    font-size: 2em;
    font-family: "FiraSans-Bold", sans-serif;
    text-align: center;
`;
  const { children } = props;
  return (
    <StyledHeading className={`title ${primary ? 'title--primary' : ''}`}>
      {children}
    </StyledHeading>
  );
};

export default Title;
