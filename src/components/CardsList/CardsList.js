import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';

import Title from '../ui/Title';
import Tag from '../ui/Tag';
import Button from '../ui/Button';

import './cards-list.scss';

const CardTitle = styled.h3`
  color: ${props => (props.theme ? props.theme.gameCards.title : '#fff')};
  font-size: 24px;
  text-align: left;
  margin: 20px;
  text-shadow: 3px 4px 5px ${props => (props.theme.themeType === 'dark' ? '#000' : 'none')};;
  position: relative;
  line-height: 24px;
`;

const TagStyled = styled(Tag)`
  margin-top: 15px;
`;

const CardsList = ({ gamesList, theme }) => (
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
        <div key={item.id} className="game-card">
          <Title primary level={2}>
            {item.subTitle}
          </Title>
          <ul className="cards">
            {
                item.gameTypes.map(game => (
                  <li key={game.id}>
                    <Link to={`/${game.url}`} className="cards__item">
                      <CardTitle className="card__title">
                        {game.title}
                      </CardTitle>
                      {
                            game.tags ? (
                              game.tags.map(tag => (
                                <Tag tag={tag.title}>
                                  {`#${tag.title}`}
                                </Tag>
                              ))
                            ) : null
                        }
                      <div
                        style={{
                          background: `url(${game.posterImg})`,
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: '100% 100%',
                          filter: theme.themeType === 'light' ? 'grayscale(1)' : 'none',
                        }}
                        className={`card card--${item.type}`}
                      />
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

CardsList.propTypes = {
  gamesList: PropTypes.shape({
    title: PropTypes.string,
    games: PropTypes.array,
  }).isRequired,
  theme: PropTypes.shape({
    themeType: PropTypes.string,
  }).isRequired,
};

export default withTheme(CardsList);
