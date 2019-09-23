import React from 'react';
import styled, { withTheme } from 'styled-components';

import Banner from '../../components/Banner';
import Menu from '../../components/Menu';
import BackgroundWrapper from '../../components/ui/BackgroundWrapper';
import Icon from '../../components/ui/Icon';
import { Tabs } from '../../components/ui/Tabs';

import handDark from '../../images/hand-dark.svg';
import handLight from '../../images/hand-light.svg';

import priceData from '../../data/prices.json';

import Logo from '../../components/ui/Logo';
import Footer from '../../components/Footer';

import './prices.scss';

const PriceList = styled.ul`
  color: ${data => (data.theme ? data.theme.textColor : '#fff')};
`;

const PriceTitle = styled.h3`
  color: ${data => (data.theme ? data.theme.titleColor : '#fff')};
  font-size: 32px;
  line-height: 42px;
  margin: 0;
`;

const SubTitle = styled.h4`
  scolor: ${data => (data.theme ? data.theme.textColor : '#fff')};
  font-size: 36px;
  line-height: 55px;
  margin: 40px;

  @media(max-width: 800px) {
      font-size: 32px;
      margin: 20px;
  }
`;

const ListItem = styled.li`
  font-size: 25px;
  padding-left: 50px;
  background-image: ${data => (data.theme && data.theme.themeType === 'light' ? `url(${handDark})` : `url(${handLight})`)};
  background-repeat: no-repeat;
  background-size: 1em;
  background-position: 0;
  margin-bottom: 15px;
  line-height: 1.7em;
  margin: 0 auto;
  text-align: left;
`;

const Prices = ({ theme }) => {
  return (
    <div style={{ backgroundColor: theme.primaryBg }} className="wrap">
      <Banner title="Стоимость">
        <Logo />
        <Menu />
      </Banner>
      <BackgroundWrapper withBuildings>
        <Tabs
          activeTab={{
            id: 1,
          }}
        >
          {
            priceData && priceData.map(item => (
              <React.Fragment key={item.id}>
                <Tabs.Tab id={item.id} title={item.name}>
                  <PriceList className="price">
                    {
                      item.prices && item.prices.map((price, index) => (
                        <li key={index} className="price__card">
                          <header className="price__header">
                            <Icon name={item.type} />
                            <PriceTitle className="price__title">{price.name}</PriceTitle>
                            <SubTitle className="price__amount">
                              {`${price.price} грн`}
                            </SubTitle>
                          </header>
                          <ul>
                            {
                              price.include && price.include.map((item, index) => (
                                <React.Fragment key={index}>
                                  <ListItem>
                                    {item}
                                  </ListItem>
                                </React.Fragment>
                              ))
                            }
                          </ul>
                        </li>
                      ))
                    }
                  </PriceList>
                  <Footer />
                </Tabs.Tab>
              </React.Fragment>
            ))
          }
        </Tabs>
      </BackgroundWrapper>
    </div>
  );
};

export default withTheme(Prices);
