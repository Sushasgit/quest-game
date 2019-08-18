import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import blood from '../../../images/blood-tag.svg';

const StyledTag = styled.span`
  font-family: MontserratBold, sans-serif;
  background-image: url(${blood});
  background-size: contain;
  min-width: 50px;
  display: inline-block;
  min-height: 30px;
  border: 2px solid ${props => (props.data === 'TOP' ? props.theme.tags.top.borderColor : props.theme.tags.standard.borderColor)}
  border-radius: 4px;
  padding: 5px;
  color: ${props => (props.data === 'TOP' ? props.theme.tags.top.textColor : props.theme.tags.standard.textColor)}
  background-position: top 200px left;
  margin-right: 15px;
`;

const Tag = ({ tag, primary, ...props }) => {
  const { children } = props;
  return (
    <StyledTag data={tag}>
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
