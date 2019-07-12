import React from 'react';

import { CARDS_DATA } from '../../utils/constants';

import './cards-list.scss';

const CardsList = () => (
  <div className="wrapper advantages bg bg--buildings">
    <h2 className="main-title main-title--primary">Наши игры</h2>
    <ul className="cards grid">
      {
        CARDS_DATA.map(item => (
          <li key={item.id}>
            <div className={`card card--${item.imgBg}`}>
              <h3 className="card__title">
                {item.title}
              </h3>
              <p>
                {item.description}
              </p>
              <a className="card__link" href="/">
                    Подробнее
              </a>
            </div>
          </li>
        ))
    }
    </ul>
  </div>
);

export default CardsList;
