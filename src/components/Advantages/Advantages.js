import React from 'react';
import styled from 'styled-components';

import { ADVANTAGES_DATA } from '../../utils/constants';

import AdvantagesPlace from './AdvantagesPlace';
import CardsList from '../CardsList/CardsList';
import ContactForm from '../ContactForm';

import './advantages.scss';
import Title from '../ui/Title';


const Description = styled.p`
  color: #fff;
  text-align: center;
  font-size: 1.2em;
  line-height: 1.8em;
`;

const ListItem = styled.p`
  color: #fff;
  text-align: center;
  font-size: 1em;
  line-height: 1.8em;
  position: relative;
  padding-top: 80px;
`;

const ListItemTitle = styled.h3`
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

const ListItemDesc = styled.p`
  color: #fff;
  font-size: 18px;
  margin-top: 30px;
  line-height: 30px;
`;

const AdvantagesBox = styled.div`
  background-color: #242424;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 100;
`;

const Advantages = () => (
  <React.Fragment>
    <AdvantagesBox className="bg bg--buildings">
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
              <ListItem key={item.id} className={`activity activity--${item.bgImg}`}>
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
      <section className="bg bg--buildings">
        <CardsList />
      </section>
      <section className="bg">
        <ContactForm />
      </section>
    </AdvantagesBox>
  </React.Fragment>
);

export default Advantages;
