import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { CARDS_DATA } from '../../utils/constants';
import Title from '../ui/Title';
import Tag from '../ui/Tag';

import './cards-list.scss';
import Button from '../ui/Button';

const Description = styled.p`
  color: ${props => (props.theme ? props.theme.textColor : '#fff')};
  font-size: 1em;
  font-weight: 700;
  opacity: 0.9;
  margin: 20px 0 -80px 0;
  line-height: 1.8em;
  text-align: center;
`;

const CardTitle = styled.h3`
  color: ${props => (props.theme ? props.theme.titleColor : '#fff')};
  font-size: 1.3em;
  font-weight: 900;
  text-align: center;
  font-family: "FiraSans-Bold", sans-serif;
  margin: 20px;
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
            <Link to={`/${item.url}`} className="cards__item">
              <CardTitle className="card__title">
                {item.title}
              </CardTitle>
              {
                item.tag ? (
                  <Tag tag={item.tag}>
                    {`#${item.tag}`}
                  </Tag>
                ) : null
              }
              <Description className="card__description">
                {item.description}
              </Description>
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
