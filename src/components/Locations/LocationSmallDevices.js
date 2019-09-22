import React from 'react';
import styled from 'styled-components';

import RippedCard from '../ui/RippedCard';
import Title from '../ui/Title';


import './location.scss';
import Button from '../ui/Button';

const LocationName = styled.div`
    background-color: ${data => (data.theme ? data.theme.primaryBg : '#fff')};
    box-shadow: 0px 0px 4px 4px ${data => (data.theme ? '#333' : '#fff')};
    color: ${props => (props.theme ? props.theme.gameCards : '#fff')};
    border: 2px solid;
    font-size: 1em;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    font-size: 22px;
    line-height: 60px;
    text-align: center;
    margin: 15px 0;

  &:after {
      content: '';
      position: absolute;
      width: calc(100% - 200px);
      height:4px;
      background-color: ${data => (data.theme ? data.theme.titleColor : '#fff')};
      left: 70px;
      margin-top: 42px;

      @media(max-width: 502px) {
        display: none;
    }
  }

  }
`;

const TitleLocation = styled.h4`
  color: ${props => (props.theme.textColor)};
  font-size: 16px;

  @media(max-width: 502px) {
    font-size: 18px;
    position: absolute;
    left: 80px;
    top: 0;
  }
`;

const LocationSmallDevices = ({ locations }) => (
  <>
    <Title primary level={2}>
      {locations.title}
    </Title>
    <ul className="locations-list wrapper">
      {
        locations.list.map((item, index) => (
          <React.Fragment key={item.id}>
            <li key={item.id} className="locations-list__item">
              <LocationName>
                {`T ${index + 1}`}
              </LocationName>
              <TitleLocation>
                {item.title}
              </TitleLocation>
              <RippedCard
                size="sm"
                id={item.id}
                images={item.images}
                img={item.src}
              />
            </li>
            <Button to={`gallery/${item.id}`}>
              Перейти
            </Button>
          </React.Fragment>
        ))
      }
    </ul>
  </>
);

export default LocationSmallDevices;
