import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled, {withTheme} from 'styled-components';

import Title from '../ui/Title';
import Tag from '../ui/Tag';
import Button from '../ui/Button';

import './cards-list.scss';
import RippedCard from '../ui/RippedCard';
import Description from '../ui/Description';

const CardTitle = styled.h3`
  color: ${props => (
    props.theme
      ? props.theme.gameCards.title
      : '#fff'
  )};
  font-size: 24px;
  text-align: left;
  margin: 20px;
  text-shadow: 3px 4px 5px ${props => (
    props.theme.themeType === 'dark'
      ? '#000'
      : 'none'
  )};
  position: relative;
  line-height: 24px;
`;

const CardsList = ({
  gamesList,
  main,
  game,
}) => (
  <div className="wrapper">
    {
      gamesList && gamesList.title
        ? (
          <>
            <Title primary level={2}> 
            {gamesList.title} 
            </Title>

            <Description align="center">
              Real Games - это место, где кровь в жилах будет бежать быстрее.
                Адреналин, который Вы испытаете у нас – заставит возвращаться снова и снова. 
                Мы всегда рады  подарить Вам взрывные эмоции
            </Description>
          </>
        )
        : null
        }

        {
            main
                ? (gamesList && gamesList.games.map((item, index) => (
                    <div key={index} className="game-card">
                        <Title primary="primary" level={2}>
                            {item.subTitle}
                        </Title>
                        <ul className="cards">
                            {
                                item
                                    .gameTypes
                                    .map((game, index) => (
                                        <li key={index}>
                                            <Link to={`${game.url}`} className="cards__item">
                                                <CardTitle className="card__title">
                                                    {game.title}
                                                </CardTitle>
                                                {
                                                    game.tags
                                                        ? (game.tags.map(tag => (
                                                            <Tag key={tag.id} tag={tag.title}>
                                                                {`#${tag.title}`}
                                                            </Tag>
                                                        )))
                                                        : null
                                                }

                                                <RippedCard view="game" img={game.posterImg} type={item.type}/>
                                            </Link>
                                            <Button to={`${game.url}`} className="card__link">
                                                Подробнее
                                            </Button>
                                        </li>
                                    ))
                            }
                        </ul>
                    </div>
                )))
                : (
                    <ul className="cards">
                        {
                            game && game
                                .gameTypes
                                .map((game, index) => (
                                    <li key={index}>
                                        <Link to={`${game.url}`} className="cards__item">
                                            <CardTitle className="card__title">
                                                {game.title}
                                            </CardTitle>
                                            {
                                                game.tags
                                                    ? (game.tags.map(tag => (
                                                        <Tag key={tag.id} tag={tag.title}>
                                                            {`#${tag.title}`}
                                                        </Tag>
                                                    )))
                                                    : null
                                            }

                                            <RippedCard view="game" img={game.posterImg}
                                                // type={item.type}
                                            />
                                        </Link>
                                        <Button to={`${game.url}`} className="card__link">
                                            Подробнее
                                        </Button>
                                    </li>
                                ))
                        }
                    </ul>
                )

        }
    </div>
);

CardsList.propTypes = {
    gamesList: PropTypes
        .shape({title: PropTypes.string, games: PropTypes.array})
        .isRequired,
    theme: PropTypes
        .shape({themeType: PropTypes.string})
        .isRequired
};

export default withTheme(CardsList);
