import React from 'react';

import { Tabs } from '../ui/Tabs';

import CardsList from '../CardsList/CardsList';
import data from '../../data/mainPage.json';

const GamesTabs = () => {
    return (
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
              </Tabs.Tab>
            </React.Fragment>
          ))
        }
      </Tabs>
    );
};

export default GamesTabs;
