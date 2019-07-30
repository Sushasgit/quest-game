import React from 'react';

import { ADVANTAGES_DATA } from '../../utils/constants';

import AdvantagesPlace from './AdvantagesPlace';
import CardsList from '../CardsList/CardsList';
import ContactForm from '../ContactForm';

import './advantages.scss';
import Title from '../ui/Title';

const Advantages = () => (
  <section className="advantages bg bg--buildings">
    <div className="bg bg--yellow wrapper">
      <Title primary level={2}>
        Real Games
      </Title>
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
    <Title level={2} />
    <div className="test-bg" />
    <CardsList />
    <ContactForm />
  </section>
);

export default Advantages;
