import React from 'react';
import styled from 'styled-components';
import {
  node,
  bool,
  string,
  oneOfType,
  oneOf,
  func,
} from 'prop-types';

const propTypes = {
  submitting: bool,
  btnType: string,
  sizing: string,
  renderSpinner: node,
  as: oneOfType([oneOf(['a', 'button']), func]),
};

const defaultProps = {
  sizing: 'm',
  btnType: 'default',
  submitting: false,
  as: 'button',
};

const StyledButton = styled.button`
    display: block;
    background-color: transparent;
    color: #FFDC26;
    border-radius: 4px;
    padding: 12px 20px;
    max-width: 100%;
    width: 100%;
    font-size: 0.6em;
    border: 2px solid #FFDC26;
`;

const ContentWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const SpinnerWrapper = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = ({
  btnType: btntype,
  sizing,
  submitting,
  renderSpinner,
  children,
  as,
  ...rest
}) => (
  <StyledButton
    as={as}
    sizing={sizing}
    btntype={btntype}
    {...rest}
  >
    {submitting && (
      <SpinnerWrapper>
        {renderSpinner}
      </SpinnerWrapper>
    )}
    <ContentWrapper submitting={submitting}>
      {children}
    </ContentWrapper>
  </StyledButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
