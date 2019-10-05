import React from 'react';
import { withTheme } from 'styled-components';

import Banner from '../../components/Banner';
import Menu from '../../components/Menu';
import BackgroundWrapper from '../../components/ui/BackgroundWrapper';
import PriceTabs from '../../components/PriceTabs';
import Logo from '../../components/ui/Logo';

const Prices = ({ theme }) => (
  <div style={{ backgroundColor: theme.primaryBg }} className="wrap">
    <Banner title="Наши цены">
      <Logo />
      <Menu />
    </Banner>
    <BackgroundWrapper withBuildings>
      <PriceTabs />
    </BackgroundWrapper>
  </div>
);

export default withTheme(Prices);
