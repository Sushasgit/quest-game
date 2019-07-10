import React from 'react';

import { ADVANTAGES_PLACE } from '../../utils/constants';

import './advantages.scss';

const AdvantagesPlace = () => (
  <section className="advantages advantages__place">
    <div className="wrapper flex">
      {
        ADVANTAGES_PLACE.map(item => (
          <article key={item.id} className="advantages__item advantages__item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))
      }
    </div>
  </section>
);

export default AdvantagesPlace;
