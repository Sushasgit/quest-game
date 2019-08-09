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

const Description = styled.p`
  color: ${data => (data.theme ? data.theme.textColor : '#fff')};
  font-size: 1em;
  font-weight: 700;
  opacity: 0.9;
  margin: 20px 0 -80px 0;
  line-height: 1.8em;
  text-align: center;
`;

const CardTitle = styled.h3`
  color: ${data => (data.theme ? data.theme.titleColor : '#fff')};
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
            <Link to="/dev" className="cards__item">
              <CardTitle className="card__title">
                {item.title}
              </CardTitle>
              {
                item.tag ? (
                  <Tag data={item.tag} className="tag">
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
