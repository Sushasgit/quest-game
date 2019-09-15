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
  color: ${props => (props.theme ? props.theme.gameCards : '#fff')};
  font-size: 1em;
  text-align: left;
  font-family: "FiraSans-Bold", sans-serif;
  margin: 20px;
  text-shadow: 3px 4px 5px #000;
  position: relative;
`;

const CardsList = ({ gamesList }) => (
  <div className="wrapper">
    {
      gamesList ? (
        <Title primary level={2}>
          {gamesList.title}
        </Title>
      ) : null
    }

    {
      gamesList && gamesList.games.map(item => (
        <div className="game-card">
          <Title primary level={2}>
            {item.subTitle}
          </Title>
          <ul className="cards">
      {
        item.gameTypes.map(item => (
          <li key={item.id}>
            <Link to={`/${item.url}`} className="cards__item">
              <CardTitle className="card__title">
                {item.title}
                {
                item.tags ? (
                  item.tags.map(tag => (
                  <Tag tag={tag.title}>
                    {`#${tag.title}`}
                  </Tag>
                  ))
                  
                ) : null
              }
              </CardTitle>
              <Description className="card__description">
                {item.description}
              </Description>
              <div
                style={{
                  background: `url(${item.posterImg})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '100% 100%',
                }}
                className={`card card--${item.imgBg}`}
              >
              </div>
              <Button className="card__link">
                  Подробнее
                </Button>
            </Link>
          </li>
        ))
      }
    </ul>
        </div>
      ))
    }
  </div>
);

export default CardsList;
