import React from 'react';
import styled from 'styled-components';

const buildStyles = rulesets => rulesets.reduce(
  (cssString, { constraint, width, rules }) => `${cssString} @media (${constraint}-width: ${width}) { ${rules} }`,
  '',
);

const makeResponsiveComponent = (rulesets, tagName = 'div') => styled(tagName)` ${buildStyles(rulesets)}`;
export const hideAt = (breakpoints) => {
  const rulesets = Object.entries(breakpoints).reduce(
    (rulesets, [constraint, width]) => [
      ...rulesets,
      {
        constraint,
        width,
        rules: 'display: none;',
      },
    ],
    [],
  );

  return makeResponsiveComponent(rulesets)
};

export const Breakpoint = ({ min, max, children }) => {
  const Component = hideAt({ min, max });
  return <Component>{children}</Component>;
};

export default makeResponsiveComponent;
