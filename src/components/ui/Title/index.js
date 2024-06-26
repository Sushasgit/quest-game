import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = ({ level, primary, ...props }) => {
  const StyledHeading = styled[`h${level}`]`
    color: ${data => (data.theme ? data.theme.titleColor : '#fff')};
    font-size: 36px;
    text-align: center;
    margin: 40px 0 25px 0;
    padding: 1px;
    font-family: 'MontserratBold';
    line-height: 1.2em;

    @media(max-width: 690px) {
      font-size: 24px;
    }
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
  children: null,
};

Title.propTypes = {
  level: PropTypes.number.isRequired,
  primary: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default Title;
