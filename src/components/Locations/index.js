import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Title from '../ui/Title';
import Icon from '../ui/Icon';

import { addCoordinates } from '../../utils/func';

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

const LocationName = styled.div`
  background-color: ${data => (data.theme ? data.theme.primaryBg : '#fff')};
  box-shadow: 0px 0px 4px 4px ${data => (data.theme ? "#333" : '#fff')};
  color: ${props => (props.theme ? props.theme.gameCards : '#fff')};
  border: 2px solid
  font-size: 1em;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 10px;
  position: relative;
`;

const Locations = ({ locations }) => {
  addCoordinates(locations.list);
  return (
    <LocationBox>
      {
        locations ? (
          <>
            <Title primary level={2}>
              {locations.title}
            </Title>

            {
                locations.list.map((item, index) => (
                  <>
                    <Location positionLeft={item.x} positionBottom={item.y}>
                      <LocationName>
                        {`T ${index + 1}`}
                      </LocationName>
                    </Location>
                  </>
                ))
            }
          </>
        ) : null
      }
      <Icon name="bg-layer6" className="factory-building" />
    </LocationBox>
  );
};

Locations.propTypes = {
  locations: PropTypes.exact({
    title: PropTypes.string,
    list: PropTypes.array,
  }).isRequired,
};

export default Locations;
