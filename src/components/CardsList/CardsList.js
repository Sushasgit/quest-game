import React from 'react';

import { Link } from 'react-router-dom';
import { CARDS_DATA } from '../../utils/constants';
import Title from '../ui/Title';

import './cards-list.scss';
import Button from '../ui/Button';

const CardsList = () => (
    <div className="wrapper">
      <Title primary level={2}>
        Наши игры
      </Title>
      <ul className="cards">
        {
          CARDS_DATA.map(item => (
            <Link to="/hideandseek" className="cards__item" key={item.id}>
              <div className="card-bg">
                <h3 className="card__title">
                  {item.title}
                </h3>
                <div style={{ background: `url(${item.posterUrl})`, backgroundSize: 'cover' }} className={`card card--${item.imgBg}`}>
                  <p>
                    {item.description}
                  </p>
                  <Button className="card__link">
                    Подробнее
                  </Button>
                </div>
              </div>
            </Link>
          ))
        }
      </ul>
    </div>
);

export default CardsList;
