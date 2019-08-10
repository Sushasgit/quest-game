import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Marker } from './svg/marker.svg';
import { ReactComponent as Instagram } from './svg/instagram.svg';
import { ReactComponent as Facebook } from './svg/facebook.svg';
import { ReactComponent as BgLayer1 } from './svg/bg-layer1.svg';
import { ReactComponent as BgLayer2 } from './svg/bg-layer2.svg';
import { ReactComponent as BgLayer3 } from './svg/bg-layer3.svg';

import { ReactComponent as BgLayer5 } from './svg/bg-layer5.svg';
import { ReactComponent as BgLayer6 } from './svg/bg-layer6.svg';
import { ReactComponent as Bird1 } from './svg/bird-1.svg';
import { ReactComponent as Bird2 } from './svg/bird-2.svg';
import { ReactComponent as Bird3 } from './svg/bird-3.svg';
import { ReactComponent as Sun } from './svg/sun.svg';
import { ReactComponent as Moon } from './svg/moon.svg';
import { ReactComponent as Bat1 } from './svg/bat-1.svg';
import { ReactComponent as Bat2 } from './svg/bat-2.svg';
import { ReactComponent as Bat3 } from './svg/bat-3.svg';
import { ReactComponent as Paintball } from './svg/paintball.svg';
import { ReactComponent as Mask } from './svg/masks.svg';
import { ReactComponent as Team } from './svg/team.svg';

const Icon = (props) => {
  switch (props.name) {
    case 'marker':
      return <Marker />;
    case 'insta':
      return <Instagram />;
    case 'facebook':
      return <Facebook />;
    case 'bg-layer1':
      return <BgLayer1 className={props.className} />;
    case 'bg-layer2':
      return <BgLayer2 className={props.className} />;
    case 'bg-layer3':
      return <BgLayer3 className={props.className} />;
    case 'bg-man':
      return <BgLayer5 className={props.className} />;
    case 'bg-layer6':
      return <BgLayer6 className={props.className} />;
    case 'bird-1':
      return <Bird1 className={props.className} />;
    case 'bird-2':
      return <Bird2 className={props.className} />;
    case 'bird-3':
      return <Bird3 className={props.className} />;
    case 'sun':
      return <Sun className={props.className} />;
    case 'moon':
      return <Moon className={props.className} />;
    case 'bat-1':
      return <Bat1 className={props.className} />;
    case 'bat-2':
      return <Bat2 className={props.className} />;
    case 'bat-3':
      return <Bat3 className={props.className} />;
    case 'paintball':
      return <Paintball className={props.className} />;
    case 'mask':
      return <Mask className={props.className} />;
    case 'team':
      return <Team className={props.className} />;
    default:
      return <Marker className={props.className} />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};


export default Icon;
