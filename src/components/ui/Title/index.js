import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = ({ level, primary, ...props }) => {
  const StyledHeading = styled[`h${level}`]`
    color: ${data => (primary ? data.theme.dark.colorYellow : '#fff')};
    // font-size: 2em;
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

Title.defaultProps = {
  primary: false,
};

Title.propTypes = {
  children: PropTypes.element.isRequired,
  level: PropTypes.number.isRequired,
  primary: PropTypes.bool,
};

export default Title;
