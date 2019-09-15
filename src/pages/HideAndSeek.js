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
`;

const TagsList = styled.div`
  text-align: center;
`;

const HideAndSeek = () => (
  <div className="wrap">
    <Banner title="Экшен-игра «Прятки»">
      <Menu />
    </Banner>
    <BackgroundWrapper withBuildings>
      <section className="wrapper">
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
          Залез — нашёл — украл — принёс, всё просто, не так ли ….?
        </Description>
        <List>
          <ListItem>
            Не замеченными, найти, украсть и принести вещи, которые им покажут на фото
          </ListItem>
          <ListItem>
            При этом минуя охранников психопатов, которые умеют только две вещи: ловить и убивать
          </ListItem>
          <ListItem>На всё про всё 75 минут !</ListItem>
        </List>

        <Title level={3}>
          Особенности игры
        </Title>
        <List>
          <ListItem>
            2-4 актёра
          </ListItem>
          <ListItem>
            Спецэффекты, декорации и пара тонн реквизита
          </ListItem>
          <ListItem>
            Для игры мы выдаём всё необходимое (камуфляж = штаны + куртка + перчатки,
            фонарик, игровое оборудование) С вас только прийти в спортивной обуви.
          </ListItem>
          <ListItem>
            3200м2 крытой, подготовленной и полностью безопасной игровой локации
            на территории завода «Биостимулятор»
          </ListItem>
          <ListItem>
              Комфортная зона отдыха со всеми удобствами. (Столы, свет, туалет, музыка,
              холодильник, удобные кресла и лежаки, банкетный зал до 100 человек, гардероб,
              камера хранения, охраняемая парковка, бар, мангал)
          </ListItem>
          <ListItem>
            ЦЕНА: 999 грн с команды до 4 участников, с каждого следующего участника —
            250грн/чел. В игре может участвовать от 2-х до 10-ти человек.
          </ListItem>
        </List>
        <Title level={3}>
          Забронировать
        </Title>
        <Description>Предварительная регистрация ОБЯЗАТЕЛЬНА</Description>
        <Calendar kindEvent={'HideAndSeek'} />
      </section>
      <Footer />
    </BackgroundWrapper>
  </div>
);

export default HideAndSeek;
