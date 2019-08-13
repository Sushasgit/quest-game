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
    display: inline-block;
    padding: 15px;
    font-family: 'FiraSans-Bold', sans-serif;
    margin-bottom: 12px;
    font-size: 0.8em;
    text-transform: uppercase;
    line-height: 100%;
    letter-spacing: 0.05em;
    width: min-content;
    position: relative;
    z-index: 1;
    border: 1px solid ${data => (data.theme ? data.theme.titleColor : '#fff')};
    background-color: transparent;
    color: ${data => (data.theme ? data.theme.titleColor : '#fff')};

    &::before, &::after {
        display: inline-block;
        content: '';
        opacity: 0.3;
        border: 1px solid ${data => (data.theme ? data.theme.titleColor : '#fff')};
        position: absolute;

        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        transition: opacity 0.5s, transform 1s ease;
        z-index: 0;
    }

    &:hover {
        border: 1px solid transparent;
        opacity: 0.7;
    }

    &:hover::after {
        opacity: 0.6;
        transform: rotate(-3deg);
    }

    &:hover::before{
        opacity: 0.6;
        transform: rotate(3deg);
    }
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
