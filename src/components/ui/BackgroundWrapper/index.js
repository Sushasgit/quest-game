import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../Icon';

const BackgroundWrapper = ({
  primary,
  fixed,
  withBuildings,
  ...props
}) => {
  const StyledWrapper = styled.div`
    height: 100%;
    width: 100%;
    padding: 40px 0 0;
    z-index: 100;
    position: relative;
    background-color: ${data => (data.theme ? data.theme.primaryBg : '#fff')}
    color: ${data => (data.theme ? data.theme.primaryBg : '#fff')}
`;

  const StyledWrapperBuldings = styled.div`
    padding: 40px 0 0;
    background-color: ${data => (data.theme ? data.theme.primaryBg : '#fff')}
    position: relative;
    z-index: 100;
    color: ${data => (data.theme ? data.theme.primaryBg : '#fff')}

    & > svg {
        position: absolute;
        top: -140px;
        width: 100%;
    }
`;

  const { children } = props;
  return (
    withBuildings ? (
      <StyledWrapperBuldings>
        <Icon name="bg-layer1" />
        {children}
      </StyledWrapperBuldings>
    ) : (
      <StyledWrapper>
        {children}
      </StyledWrapper>
    )
  );
};

BackgroundWrapper.defaultProps = {
  primary: false,
  fixed: false,
  withBuildings: false,
};

BackgroundWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  withBuildings: PropTypes.bool,
  primary: PropTypes.bool,
  fixed: PropTypes.bool,
};

export default BackgroundWrapper;
