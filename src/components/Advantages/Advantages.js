import React from 'react';

import { ADVANTAGES_DATA } from '../../utils/constants';

import AdvantagesPlace from './AdvantagesPlace';
// import MapBox from '../MapBox/MapBox';
import CardsList from '../CardsList/CardsList';
import ContactForm from '../ContactForm';

import './advantages.scss';

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
          <li key={item.id} className={`activity a activity--${item.bgImg}`}>
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
    <div className="test-bg" />
    <CardsList />
    <ContactForm />
    {/* <MapBox /> */}
  </section>
);

export default Advantages;
