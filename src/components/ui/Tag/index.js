import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTag = styled.div`
  font-family: MontserratBold, sans-serif;
  font-size: ${props => (props.size === 'lg' ? '25px' : '14px')};
  background-color:  ${props => (props.theme.themeType === 'light' ? props.theme.primaryBg : props.theme.titleColor)}
  background-size: contain;
  min-width: 50px;
  display: inline-block;
  min-height: 25px;
  border: 2px solid ${props => (props.data === 'TOP' ? props.theme.tags.top.borderColor : props.theme.tags.standard.borderColor)}
  border-radius: 4px;
  padding: 0 5px;
  padding: ${props => (props.size === 'lg' ? '10px' : '0 5px')};
  transform: ${props => (props.size === 'lg' ? '' : '0 5px')};
  color: #000;
  background-position: top 200px left;
  margin-right: 15px;
  margin-left: 15px;


  @media(max-width: 800px) {
    font-size: ${props => (props.size === 'lg' ? '18px' : '14px')};
  }
`;

const Tag = ({ tag, primary, size, ...props }) => {
  const { children } = props;
  return (
    <StyledTag size={size} data={tag}>
      {children}
    </StyledTag>
  );
};

Tag.defaultProps = {
  primary: false,
};

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  primary: PropTypes.bool,
};

export default Tag;
