import React from 'react';
import styled, { withTheme } from 'styled-components';

import { ADVANTAGES_DATA } from '../../utils/constants';

import AdvantagesPlace from './AdvantagesPlace';
import CardsList from '../CardsList/CardsList';
import ContactForm from '../ContactForm';

import './advantages.scss';
import Title from '../ui/Title';
import BackgroundWrapper from '../ui/BackgroundWrapper';
import Icon from '../ui/Icon';


const Description = styled.p`
  text-align: center;
  font-size: 1.2em;
  line-height: 1.8em;
  color: ${data => (data.theme ? data.theme.textColor : '#fff')};
`;

const ListItem = styled.li`
  color: ${data => (data.theme ? data.theme.textColor : '#fff')};
  text-align: center;
  font-size: 1em;
  line-height: 1.8em;
  position: relative;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 80px 80px;
`;

const ListItemTitle = styled.h3`
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

const ListItemDesc = styled.p`
  font-size: 18px;
  margin-top: 30px;
  line-height: 30px;
`;

const ListItemIcon = styled(Icon)`
  max-width: 125px;
  color: ${data => (data.theme ? data.theme.titleColor : '#fff')}
`;

const Advantages = () => (
  <React.Fragment>
    <BackgroundWrapper withBuildings>
      <section className="wrapper">
        <Title primary level={2}>
          Real Games
        </Title>
        <Description>
          9 лет опыта в организации разных мероприятий, 6 лет из них по направлению «экстрим».
        </Description>
        <ul className="flex">
          {
            ADVANTAGES_DATA.map(item => (
              <ListItem key={item.id}>
                <ListItemIcon name={item.bgImg} />
                <ListItemTitle>
                  <span>{item.title}</span>
                </ListItemTitle>

                <ListItemDesc>
                  {item.description}
                </ListItemDesc>
              </ListItem>
            ))
          }
        </ul>
      </section>
      <section className="flex wrapper">
        <AdvantagesPlace />
      </section>
      <div className="test-bg" />
      <BackgroundWrapper withBuildings>
        <CardsList />
      </BackgroundWrapper>
      <BackgroundWrapper className="bg">
        <ContactForm />
      </BackgroundWrapper>
    </BackgroundWrapper>
  </React.Fragment>
);

export default withTheme(Advantages);
