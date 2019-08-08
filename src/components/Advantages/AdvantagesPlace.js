import React from 'react';

import { ADVANTAGES_PLACE } from '../../utils/constants';

import './advantages.scss';

const AdvantagesPlace = () => (
  ADVANTAGES_PLACE.map(item => (
    <article key={item.id} className="advantage">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  ))
);

export default AdvantagesPlace;
