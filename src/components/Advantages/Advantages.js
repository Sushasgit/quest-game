import React from 'react';

import { ADVANTAGES_DATA } from '../../utils/constants';

import './advantages.scss';

const Advantages = () => (
  <section className="advantages">
    <div className="bg bg--yellow">
      <h2 className="main-title main-title--primary">Real Games</h2>
    </div>
    <p className="main-description">
        9 лет опыта в организации разных мероприятий, 6 лет из них по направлению «экстрим».
    </p>
    <ul className="advantages__games flex">
      {
        ADVANTAGES_DATA.map(item => (
          <li key={item.id} className={`activity activity--${item.bgImg}`}>
            <h3 className="activity__title">
              <span>{item.title}</span>
            </h3>

            <p className="activity__description">
              {item.description}
            </p>
          </li>
        ))
                }
    </ul>
  </section>
);

export default Advantages;
