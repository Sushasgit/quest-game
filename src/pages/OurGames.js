import React from 'react';
import styled from 'styled-components';

import Banner from '../components/Banner';
import Menu from '../components/Menu';
import { Tabs } from '../components/ui/Tabs';
import BackgroundWrapper from '../components/ui/BackgroundWrapper';
import Title from '../components/ui/Title';
import handDark from '../images/hand-dark.svg';
import handLight from '../images/hand-light.svg';

const List = styled.ul`
  color: ${data => (data.theme ? data.theme.textColor : '#fff')};
  margin: 0;
`;

const ListItem = styled.li`
  font-size: 1em;
  padding-left: 1.5em;
  background-image: ${data => (data.theme && data.theme.themeType === 'light' ? `url(${handDark})` : `url(${handLight})`)};
  background-repeat: no-repeat;
  background-size: 1em;
  background-position: 0;
  margin-bottom: 15px;
  line-height: 1.7em;
`;

const Row = styled.article`
  padding: 40px 0;
  border-bottom: 3px dashed ${data => (data.theme ? data.theme.titleColor : '#fff')};
  border-top: 3px dashed ${data => (data.theme ? data.theme.titleColor : '#fff')};

  @media (min-width:800px) {
     display:grid;
     grid-template-columns:25% 40% auto;
     grid-column-gap:40px;
     border-left-width: 10px;
     border-right-width: 10px;
   }
`;

const OurGames = () => (
  <React.Fragment>
    <div className="wrap">
      <Banner title="Территория реальных игр">
        <Menu />
      </Banner>
      <BackgroundWrapper withBuildings>
        <Tabs
          activeTab={{
            id: "tab1"
          }}
        >
      <Tabs.Tab id="tab1" title="Пйентбол">
      <Row>
          <div>
            <Title level={3}>
              Пейнтбол
            </Title>

            100грн
          </div>
          <div>
          <Title level={5}>
             Входит в стоимость
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
          </div>
           <div>
           <Title level={5}>
             Оплачивается дополнительно
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
          </div>
        </Row>
      </Tabs.Tab>
      <Tabs.Tab id="tab2" title="Страйкбол">
        <div style={{ padding: 10 }}>
          This is tab 2
        </div>
      </Tabs.Tab>
      <Tabs.Tab id="tab3" title="Детский">
        <div style={{ padding: 10 }}>
          This is tab 3
        </div>
      </Tabs.Tab>
      <Tabs.Tab id="tab4" title="Лазертаг">
        <div style={{ padding: 10 }}>
          This is tab 4
        </div>
      </Tabs.Tab>
      <Tabs.Tab id="tab5" title="Ночной">
        <div style={{ padding: 10 }}>
          This is tab 5
        </div>
      </Tabs.Tab>
    </Tabs>
    </BackgroundWrapper>

    </div>
  </React.Fragment>
);

export default OurGames;
