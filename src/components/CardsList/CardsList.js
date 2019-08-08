import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { CARDS_DATA } from '../../utils/constants';
import Title from '../ui/Title';

import './cards-list.scss';
import Button from '../ui/Button';

import blood from '../../images/blood-tag.svg';

const Tag = styled.span`
  background-image: url(${blood});
  background-size: contain;
  min-width: 50px;
  display: inline-block;
  min-height: 40px;
  border: 2px solid ${props => (props.data === '18+' ? '#ff0000' : '#FFDC26')};
  font-weight: 900;
  border-radius: 4px;
  padding: 5px;
  color: ${props => (props.data === 'TOP' ? '#FFDC26' : '#fff')}
  background-position: top 200px left;
`;

const CardsList = () => (
  <div className="wrapper">
    <Title primary level={2}>
      Наши игры
    </Title>
    <ul className="cards">
      {
        CARDS_DATA.map(item => (
          <li key={item.id}>
            <Link to="/hideandseek" className="cards__item">
              <h3 className="card__title">
                {item.title}
              </h3>
              {
                item.tag ? (
                  <Tag data={item.tag} className="tag">
                    {`#${item.tag}`}
                  </Tag>
                ) : null
              }
              <p className="card__description">
                {item.description}
              </p>
              <div
                style={{
                  background: `url(${item.posterUrlJpg})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '100% 100%',
                }}
                className={`card card--${item.imgBg}`}
              >
                <Button className="card__link">
                  Подробнее
                </Button>
              </div>
            </Link>
          </li>
        ))
      }
    </ul>
  </div>
);

export default CardsList;
