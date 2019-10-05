import React from 'react';
import styled from 'styled-components';

import Description from '../ui/Description';

import advantages from '../../data/advantagePlace.json';

import './advantages.scss';

const Advantage = styled.article`
    color: ${data => (data.theme ? data.theme.textColor : '#fff')};
    background: ${data => (data.theme ? data.theme.primaryBg : '#fff')};


    &::before{
        border-top: 5px solid ${data => (data.theme ? data.theme.titleColor : '#fff')};
        border-left: 5px solid ${data => (data.theme ? data.theme.titleColor : '#fff')};
    }

    &::after {
        border-bottom: 5px solid ${data => (data.theme ? data.theme.titleColor : '#fff')};
        border-right: 5px solid ${data => (data.theme ? data.theme.titleColor : '#fff')};
    }
`;

const AdvantagesPlace = () => (
  <section className="flex wrapper">
    {
      advantages.map(item => (
        <Advantage key={item.id} className="advantage">
          <h3>
            {item.title}
          </h3>
          <Description align="center">
            {item.description}
          </Description>
        </Advantage>
      ))
    }
  </section>
);

export default AdvantagesPlace;
