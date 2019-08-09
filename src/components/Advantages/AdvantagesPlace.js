import React from 'react';
import styled from 'styled-components';

import { ADVANTAGES_PLACE } from '../../utils/constants';

import './advantages.scss';

const Advantage = styled.article`
  color: ${data => (data.theme ? data.theme.textColor : '#fff')}
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
