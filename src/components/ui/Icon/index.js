import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Marker } from './svg/marker.svg';
import { ReactComponent as Instagram } from './svg/instagram.svg';
import { ReactComponent as Facebook } from './svg/facebook.svg';

const Icon = (props) => {
  switch (props.name) {
    case 'marker':
      return <Marker />;
    case 'insta':
      return <Instagram />;
    case 'facebook':
      return <Facebook />;
    default:
      return <Marker />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};


export default Icon;
