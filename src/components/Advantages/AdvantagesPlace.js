import React from 'react';
import styled from 'styled-components';

import { ADVANTAGES_PLACE } from '../../utils/constants';

import './advantages.scss';

const Advantage = styled.article`
  color: ${data => (data.theme ? data.theme.textColor : '#fff')};
  background: ${data => (data.theme ? data.theme.primaryBg : '#fff')};


  &::before{
    border-top: 5px solid ${data => (data.theme ? data.theme.titleColor : '#fff')};
    border-left: 5px solid ${data => (data.theme ? data.theme.titleColor : '#fff')};
  }

  &::after {
    border-bottom: 5px solid ${data => (data.theme ? data.theme.titleColor : '#fff')};
    border-right: 5px solid ${data => (data.theme ? data.theme.titleColor : '#fff')};
  }
`;

const AdvantagesPlace = () => (
  ADVANTAGES_PLACE.map(item => (
    <Advantage key={item.id} className="advantage">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </Advantage>
  ))
);

export default AdvantagesPlace;
