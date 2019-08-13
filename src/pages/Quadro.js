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

import gallary1 from '../images/gallery/quadro-gallery.jpg';
import gallary2 from '../images/gallery/quadro-gallery2.jpg';

const Description = styled.p`
  text-align: center;
  font-size: 1.2em;
  line-height: 1.8em;
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

const Quadro = () => (
  <div className="wrap">
    <Banner title="Квадроциклы и багги">
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
          Как это будет
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
          Квадроциклы и Багги легки в управлении, имеют достаточную проходимость, а
          предоставляемая экипировка, сделает Вашу прогулку не только увлекательной, но и
          безопасной.
        </Description>
        <List>
          <ListItem>
            Вы оседлаете железных коней и прокатимся по очень красивым местам.
            Маршрут занимает 20 -25 км ( 1 час)
          </ListItem>
          <ListItem>
            В наличии есть:- 4 двухместных Квадроциклов BRP Outlander MAX 570-2019- 2
            двухместных Багги
            BRP Maverick 2019- 1 детский Квадроцикл Yamaha YFM 90 Raptor
          </ListItem>
          <ListItem>На всё про всё 75 минут !</ListItem>
        </List>

        <Title level={3}>
          Когда и где
        </Title>
        <List>
          <ListItem>
            Пн-Вс с 06:00 и до Заката
          </ListItem>
          <ListItem>
            с. Санжейка, 4 км от г.Черноморск
          </ListItem>
        </List>

        <Title level={3}>
            Цены
        </Title>
        <List>
          <ListItem>
            Квадроцикл прокат: 800 грн/1 час, 1500 грн/2 часа
          </ListItem>
          <ListItem>
            Багги аренда: 1000грн/1 час, 1800 грн/2часа
          </ListItem>
        </List>

        <Title level={3}>
          В цену входит
        </Title>
        <List>
          <ListItem>
            Аренда
          </ListItem>
          <ListItem>
            Экипировка ( Джерси,шлем,перчатки, защита рук и ног, с Вас обувь и штаны)
          </ListItem>
          <ListItem>
            Много Много Адреналина
          </ListItem>
        </List>
        <Title level={3}>
          Забронировать
        </Title>
        <Description>
          Предварительная регистрация ОБЯЗАТЕЛЬНА
        </Description>
        <Calendar />
      </section>
      <Footer />
    </BackgroundWrapper>
  </div>
);

export default Quadro;
