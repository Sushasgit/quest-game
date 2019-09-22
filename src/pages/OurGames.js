import React from 'react';

import Banner from '../components/Banner';
import Menu from '../components/Menu';
import { Tabs } from '../components/ui/Tabs';
import BackgroundWrapper from '../components/ui/BackgroundWrapper';
import Footer from '../components/Footer';
import CardsList from '../components/CardsList/CardsList';
import Logo from '../components/ui/Logo';

import data from '../data/mainPage.json';

const OurGames = () => (
  <React.Fragment>
    <div className="wrap">
      <Banner title="Наши игры">
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
            data && data.ourGames.games.map(item => (
              <React.Fragment key={item.id}>
                <Tabs.Tab id={item.id} title={item.subTitle}>
                  <CardsList game={item} />
                  <Footer />
                </Tabs.Tab>
              </React.Fragment>
            ))
          }
        </Tabs>
      </BackgroundWrapper>
    </div>
  </React.Fragment>
);

export default OurGames;
