import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import ConnectElements from 'react-connect-elements';

import Title from '../ui/Title';
import Icon from '../ui/Icon';
import RippedCard from '../ui/RippedCard';

import { COORDINATES_LOCATION } from '../../utils/constants';

import './location.scss';

const LocationBox = styled.div`
    position: relative;
    overflow: hidden;
`;

const Location = styled.div`
    position: absolute;
    bottom: ${props => (props.positionBottom ? `${props.positionBottom}px` : 0)};
    left: ${props => (props.positionLeft ? `${props.positionLeft}%` : 0)};
`;

const TitleLocation = styled.div`
    color: ${props => (props.theme.titleColor)};
    margin-left: 15px;
    font-size: 18px;
`;

const FotoBox = styled.div`
    position: absolute;
    bottom: ${props => (props.positionBottom ? `${props.positionBottom}px` : 0)};
    left: ${props => (props.positionLeft ? `${props.positionLeft}%` : 0)};
`;

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
`;

class Locations extends Component {
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
  return (
    visible
      ? (
        <ConnectElements
          selector=".els"
          overlay={10}
          strokeWidth={2}
          color="#FFDC26"
          elements={[
            { from: '.element0', to: '.element100' },
            { from: '.element1', to: '.element101' },
            { from: '.element2', to: '.element102' },
            { from: '.element3', to: '.element103' },
            { from: '.element4', to: '.element104' },
            { from: '.element5', to: '.element105' },
            { from: '.element6', to: '.element106' },
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
              <div className="els">
                <Title primary level={2}>
                  {locations.title}
                </Title>
                <ul className="location-names wrapper">
                  {
                    locations.list.map((item, index) => (
                      <li key={item.id} className="location-names__item">
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
                <div className="location-scheme">
                  {
                    locations.list.map((item, index) => (
                      <article key={item.id}>
                        <Location
                          positionLeft={COORDINATES_LOCATION[index]['item.x']}
                          positionBottom={COORDINATES_LOCATION[index]['item.y']}
                          className={`${'element element'}${index}`}
                        >
                          <LocationName>
                            {`T ${index + 1}`}
                          </LocationName>
                        </Location>
                        <FotoBox
                          positionLeft={COORDINATES_LOCATION[index]['item.x2']}
                          positionBottom={COORDINATES_LOCATION[index]['item.y2']}
                          className={`${'element element'}${100 + index}`}
                        >
                          <RippedCard
                            id={item.id}
                            images={item.images}
                            size="sm"
                            img={item.src}
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

Locations.propTypes = {
  locations: PropTypes.oneOfType([]),
};

export default withTheme(Locations);
