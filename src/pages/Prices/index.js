import React from 'react';
import styled from 'styled-components';

import Banner from '../../components/Banner';
import Menu from '../../components/Menu';
import BackgroundWrapper from '../../components/ui/BackgroundWrapper';
import Icon from '../../components/ui/Icon';

import handDark from '../../images/hand-dark.svg';
import handLight from '../../images/hand-light.svg';

import './prices.scss';
import Tag from '../../components/ui/Tag';

const PriceList = styled.ul`
  color: ${data => (data.theme ? data.theme.textColor : '#fff')};
`;

const PriceTitle = styled.h3`
  color: ${data => (data.theme ? data.theme.titleColor : '#fff')};
  font-size: 32px;
  margin: 0;
`;

const SubTitle = styled.h4`
  scolor: ${data => (data.theme ? data.theme.textColor : '#fff')};
  font-size: 50px;
  margin: 40px;
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
  max-width: 51%;
  margin: 0 auto;
  text-align: left;
`;

const Label = styled(Tag)`
    position: absolute;
`;

const Prices = () => {
  return (
    <div className="wrap">
      <Banner title="Стоимость">
        <Menu />
      </Banner>
      <BackgroundWrapper withBuildings>
        <PriceList className="price">
          <li className="price__card">
            <header className="price__header">
              <Icon name="painballImg" />
              <PriceTitle className="price__title">Пакет "Стандарт" </PriceTitle>
              <SubTitle className="price__amount">
                350 грн
            </SubTitle>
            </header>

            <ul>
              <ListItem>2 часа игры</ListItem>
              <ListItem>100 шаров</ListItem>
              <ListItem>маска</ListItem>
              <ListItem>маркер</ListItem>
              <ListItem>форма,печатки</ListItem>
              <ListItem>защитный жилет</ListItem>
              <ListItem>защита шеи</ListItem>
            </ul>
          </li>
          <li className="price__card">
            <header className="price__header">
              <Icon name="painballImg" />
              <PriceTitle className="price__title">Пакет «Максимум» </PriceTitle>
              <Label>Лучшая цена</Label>
              <SubTitle className="price__amount">
                450 грн
              </SubTitle>
            </header>

            <ul>
              <ListItem>3 часа игры</ListItem>
              <ListItem>200 шаров</ListItem>
              <ListItem>маска</ListItem>
              <ListItem>маркер</ListItem>
              <ListItem>форма,печатки</ListItem>
              <ListItem>защитный жилет</ListItem>
              <ListItem>защита шеи</ListItem>
            </ul>
          </li>
        </PriceList>
      </BackgroundWrapper>
    </div>
  );
};

export default Prices;
