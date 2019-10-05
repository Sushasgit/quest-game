import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import styled, { withTheme } from 'styled-components';
import ConnectElements from 'react-connect-elements';

import Title from '../ui/Title';
import Icon from '../ui/Icon';
import RippedCard from '../ui/RippedCard';

import { COORDINATES_LOCATION } from '../../utils/constants';

import './location.scss';

const LocationBox = styled.div`
    position: relative;
    // overflow: hidden;
    padding: 40px 0;
`;

const TitleLocation = styled.div`
    color: ${props => (props.theme.textColor)};
    margin-left: 15px;
    font-size: 18px;
    font-family: 'MontserratBold';
`;

const FotoBox = styled.div`
    position: absolute;
    bottom: ${props => (props.positionBottom ? `${props.positionBottom}px` : 0)};
    left: ${props => (props.positionLeft ? `${props.positionLeft}%` : 0)};
`;

const Location = styled.div`
    position: absolute;
    bottom: ${props => (props.positionBottom ? `${props.positionBottom}px` : 0)};
    left: ${props => (props.positionLeft ? `${props.positionLeft}%` : 0)};
    transition: transform 3s;

    &:hover ~ ${FotoBox} { 
        transform: scale(1.5);
        transition: all 0.3s ease-in;
        filter: hue-rotate(185deg);
    }
`;


const LocationName = styled.div`
    background-color: ${data => (data.theme ? data.theme.primaryBg : '#fff')};
    box-shadow: 0px 0px 4px 4px ${data => (data.theme ? '#333' : '#fff')};
    color: ${props => (props.theme ? props.theme.textColor : '#fff')};
    border: 2px solid;
    font-size: 1em;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    font-size: 22px;
    line-height: 60px;
    text-align: center;
    transition: all .3s linear;
`;

const LocationLink = styled(Link)`
    background-color: ${data => (data.theme ? data.theme.primaryBg : '#fff')};
    box-shadow: 0px 0px 4px 4px ${data => (data.theme ? '#333' : '#fff')};
    color: ${props => (props.theme ? props.theme.textColor : '#fff')};
    display: inline-block;
    text-decoration: none;
    border: 2px solid;
    font-size: 1em;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    font-size: 22px;
    line-height: 60px;
    text-align: center;
    transition: all .3s linear;

    &:hover, 
    &:focus {
        color: ${props => (props.theme ? props.theme.primaryBg : '#fff')};
        background-color: ${props => (props.theme ? props.theme.titleColor : '#fff')};
    }
`;

class Locations extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.debounce(this.onVisible, 200, false), false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debounce(this.onVisible, 200, false), false);
  }

   debounce = (func, wait, immediate) => {
     let timeout;
     return () => {
       const context = this;
       const args = this;
       const later = () => {
         timeout = null;
         if (!immediate) func.apply(context, args);
       };
       const callNow = immediate && !timeout;
       clearTimeout(timeout);
       timeout = setTimeout(later, wait);
       if (callNow) func.apply(context, args);
     };
   };

  onVisible = () => {
    this.setState({
      visible: false,
    }, () => {
      this.setState({
        visible: true,
      });
    });
  };

connect = () => {
  const { visible } = this.state;
  const { theme } = this.props;
  return (
    visible
      ? (
        <ConnectElements
          selector=".locations"
          overlay={10}
          strokeWidth={2}
          color={theme.titleColor}
          elements={[
            { from: '.location0', to: '.location100' },
            { from: '.location1', to: '.location101' },
            { from: '.location2', to: '.location102' },
            { from: '.location3', to: '.location103' },
            { from: '.location4', to: '.location104' },
            { from: '.location5', to: '.location105' },
            { from: '.location6', to: '.location106' },
          ]}
        />
      )
      : ''
  );
};

render() {
  const { locations } = this.props;
  return (
    (
      <LocationBox>
        {
            locations ? (
              <div className="locations">
                <Title primary level={2}>
                  {locations.title}
                </Title>
                <ul className="locations__list wrapper">
                  {
                    locations.list.map((item, index) => (
                      <li key={index} className="locations__name">
                        <LocationName>
                          {`T ${index + 1}`}
                        </LocationName>
                        <TitleLocation>
                          {item.title}
                        </TitleLocation>
                      </li>
                    ))
                }
                </ul>
                <div className="locations__scheme">
                  {
                    locations.list.map((item, index) => (
                      <article key={index}>
                        <Location
                          positionLeft={COORDINATES_LOCATION[index]['item.x']}
                          positionBottom={COORDINATES_LOCATION[index]['item.y']}
                          className={`${'location location'}${index}`}
                        >
                          <LocationLink  to={`/gallery/${item.id}`}>
                            {`T ${index + 1}`}
                          </LocationLink>
                        </Location>
                        <FotoBox
                          positionLeft={COORDINATES_LOCATION[index]['item.x2']}
                          positionBottom={COORDINATES_LOCATION[index]['item.y2']}
                          className={`${'location location'}${100 + index}`}
                        >
                          <RippedCard
                            id={item.id}
                            images={item.images}
                            size="sm"
                            img={item.src}
                            title={item.title}
                          />
                        </FotoBox>
                      </article>
                    ))
                  }
                </div>
                { this.connect() }
              </div>
            ) : null
        }
        <Icon name="bg-layer6" className="factory-building" />
      </LocationBox>
    ));
}
}

Locations.defaultProps = {
  locations: [],
};

export default withTheme(Locations);
