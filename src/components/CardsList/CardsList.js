import React from 'react';

import { CARDS_DATA } from '../../utils/constants';

import './cards-list.scss';

const CardsList = () => (
  <div className="wrapper advantages bg bg--buildings cards-box">
    <h2 className="main-title main-title--primary">Наши игры</h2>
    <ul className="cards grid">
      {
        CARDS_DATA.map(item => (
          <li key={item.id}>
            <div className="card-bg">
              <h3 className="card__title">
                {item.title}
              </h3>
              <div style={{ background: `url(${item.posterUrl})`, backgroundSize: 'cover' }} className={`card card--${item.imgBg}`}>
                <p>
                  {item.description}
                </p>
                <a className="card__link" href="/">
                  Подробнее
                </a>
              </div>
            </div>
          </li>
        ))
    }
    </ul>
  </div>
);

export default CardsList;
