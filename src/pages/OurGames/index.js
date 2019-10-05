import React from 'react';

import Banner from '../../components/Banner';
import Menu from '../../components/Menu';
import Logo from '../../components/ui/Logo';
import BackgroundWrapper from '../../components/ui/BackgroundWrapper';
import GamesTabs from '../../components/GamesTabs';
import PriceTabs from '../../components/PriceTabs';
import OurServices from '../../components/OurServices';
import Title from '../../components/ui/Title';
import AdvantagesPlace from '../../components/Advantages/AdvantagesPlace';

import mainInfo from '../../data/mainPage.json';
import ContactForm from '../../components/ContactForm';

const OurGames = () => (
  <React.Fragment>
    <div className="wrap">
      <Banner title="Наши игры">
        <Logo />
        <Menu />
      </Banner>
      <BackgroundWrapper withBuildings>
        <GamesTabs />
      </BackgroundWrapper>
      <BackgroundWrapper>
        <Title level={3}>
          Наши цены
        </Title>
        <PriceTabs />
        <OurServices services={mainInfo.ourGames.services} />
        <Title level={3}>
          Преимущества
        </Title>
        <AdvantagesPlace />
        <ContactForm />
      </BackgroundWrapper>
    </div>
  </React.Fragment>
);

export default OurGames;
