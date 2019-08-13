import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner/Banner';
import Menu from '../components/Menu';
import BackgroundWrapper from '../components/ui/BackgroundWrapper';
import Title from '../components/ui/Title';
import Tag from '../components/ui/Tag';

import handDark from '../images/hand-dark.svg';
import handLight from '../images/hand-light.svg';
import Calendar from '../components/Calendar';
import Footer from '../components/Footer';

import '../components/Advantages/advantages.scss';

import gallary1 from '../images/gallery/quadro-gallery.jpg';
import gallary2 from '../images/gallery/quadro-gallery2.jpg';

const Description = styled.p`
  text-align: center;
  font-size: 1.2em;
  line-height: 1.8em;
  margin: 40px 0;
  color: ${data => (data.theme ? data.theme.textColor : '#fff')};
`;

const List = styled.ul`
  color: ${data => (data.theme ? data.theme.textColor : '#fff')};
`;

const ListItem = styled.li`
  padding-left: 1.5em;
  background-image: ${data => (data.theme && data.theme.themeType === 'light' ? `url(${handDark})` : `url(${handLight})`)};
  background-repeat: no-repeat;
  background-size: 1em;
  background-position: 0;
  margin: 15px 0;
  line-height: 26px;
`;

const TagsList = styled.div`
  text-align: center;
`;

const Advantage = styled.article`
  color: ${data => (data.theme ? data.theme.textColor : '#fff')};
  background: ${data => (data.theme ? data.theme.primaryBg : '#fff')};


  &::before{
    border-top: 5px solid ${data => (data.theme ? data.theme.titleColor : '#fff')};
    border-left: 5px solid ${data => (data.theme ? data.theme.titleColor : '#fff')};
  }

  &::after {
    border-bottom: 5px solid ${data => (data.theme ? data.theme.titleColor : '#fff')};
    border-right: 5px solid ${data => (data.theme ? data.theme.titleColor : '#fff')};
  }
`;

const PaintBall = () => (
  <div className="wrap">
    <Banner title="Пейнтбол — игра для всех и каждого!">
      <Menu />
    </Banner>
    <BackgroundWrapper withBuildings>
      <section className="wrapper">
        <div className="flex">
          <Advantage className="advantage">
            <img src={gallary1} alt="" />
          </Advantage>
          <Advantage className="advantage">
            <img src={gallary2} alt="" />
          </Advantage>
          <Advantage className="advantage">
            <img src={gallary1} alt="" />
          </Advantage>
          <Advantage className="advantage">
            <img src={gallary1} alt="" />
          </Advantage>
        </div>

        <Title level={3}>
          Задача команды
        </Title>
        <TagsList>
          <Tag>
            18+
          </Tag>
          <Tag>
            TOP
          </Tag>
        </TagsList>
        <Description>
          Мы организовываем пейнтбольные турниры, сценарные игры, корпоративы, тимбилдинги и
          просто любительские игры в пейнтбол. В нашем клубе большое внимание уделяется
          безопасности игры(подробный инструктаж, отличная экипировка, качественное судейство).
        </Description>

        <Title level={3}>
          Для новичков, открытые игры
        </Title>
        <List>
          <ListItem>
            Все красят друг друга с одинакового оборудования;
          </ListItem>
          <ListItem>
              Мы выдаем экипировку (термо-маска, форма, перчатки, бронежилет,
              защита на шею и подсумок), для девушек усиленная защита, с вас — удобная обувь
              (домашние тапочки не в счет);
          </ListItem>
          <ListItem>
              Для игры мы выдаём всё необходимое (камуфляж = штаны + куртка + перчатки, фонарик,
              игровое оборудование) С вас только прийти в спортивной обуви.
          </ListItem>
          <ListItem>
                Сопровождение боя судьями + спецэффектами + хоррор декорации + сценарий из 8 миссий.
          </ListItem>
        </List>

        <Title level={3}>
          Пейнтбол для детей
        </Title>
        <TagsList>
          <Tag>
            от 5 до 12 лет
          </Tag>
          <Tag>
            TOP
          </Tag>
        </TagsList>
        <List>
          <ListItem>
            После игры проведение праздника(день рождения и т.д.)
          </ListItem>
          <ListItem>
            В детском Пейнтболе используется оборудование JT SPLATMASTER  —
            коллекция пистолетов, ружей разработанных специально для детей
          </ListItem>
          <ListItem>
              Для игры мы выдаём всё необходимое (камуфляж = штаны + куртка + перчатки,
              фонарик, игровое оборудование) С вас только прийти в спортивной обуви
          </ListItem>
          <ListItem>
            Комфорт и максимальная безопасность
          </ListItem>
        </List>

        <Title level={3}>
            Ночной пейнтбол
        </Title>
        <TagsList>
          <Tag>
            от 0 до 100 лет
          </Tag>
          <Tag>
            TOP
          </Tag>
        </TagsList>
        <List>
          <ListItem>
            Этот вид игры подойдет для тех, кто хочет испытать новые
            ощущения и выработать в себе определенные навыки.
          </ListItem>
          <ListItem>
            Ночные программы подойдут людям, имеющим опыт и
            желающим «повысить планку», стать на ступень выше в игре.
          </ListItem>
          <ListItem>
            Конечно, есть определенный возрастной ценз, поэтому в ночных соревнованиях
            зачастую исключается участие детей.
          </ListItem>
        </List>

        <Title level={3}>
          Спортивный пейнтбол
        </Title>
        <List>
          <ListItem>
            В отличие от развлекательного формата, он является не столько игрой,
            сколько видом спорта.
          </ListItem>
          <ListItem>
            Здесь есть четкие правила и специальные приспособления для удобства игроков.
          </ListItem>
          <ListItem>
            Также ярко выражена экипировка команд, применяются современные высокоточные
            электронные маркеры с разнообразными настройками и повышенной скорострельностью
          </ListItem>
        </List>

        <Title level={3}>
          Забронировать
        </Title>
        <Calendar />
      </section>
      <Footer />
    </BackgroundWrapper>
  </div>
);

export default PaintBall;
