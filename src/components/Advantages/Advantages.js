import React from 'react';

import { ADVANTAGES_DATA } from '../../utils/constants';

import './advantages.scss';
import AdvantagesPlace from './AdvantagesPlace';
// import AdvantagesPlace from './AdvantagesPlace';
// import CardsList from '../CardsList/CardsList';
import MapBox from '../MapBox/MapBox';
import ContactForm from '../ContactForm/index.js';
import CardsList from '../CardsList/CardsList';
// import ContactForm from '../ContactForm.js';

const Advantages = () => (
  <section className="advantages bg bg--buildings">
    <div className="bg bg--yellow wrapper">
      <h2 className="main-title main-title--primary">Real Games</h2>
      <p className="main-description">
        9 лет опыта в организации разных мероприятий, 6 лет из них по направлению «экстрим».
      </p>
    </div>
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
    <AdvantagesPlace />
    <CardsList />
    <ContactForm />
    <MapBox />
  </section>
);

export default Advantages;
