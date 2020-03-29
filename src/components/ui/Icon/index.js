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
import { ReactComponent as StrikeMan } from './svg/strike-man.svg';
import { ReactComponent as Quadro } from './svg/quadro.svg';
import { ReactComponent as Cake } from './svg/cake.svg';
import { ReactComponent as Mustache } from './svg/mustache.svg';
import { ReactComponent as Rent } from './svg/rent.svg';
import { ReactComponent as Graduation } from './svg/graduation.svg';
import { ReactComponent as PaintballImg } from './svg/paintball-price.svg';
import { ReactComponent as Events } from './svg/upcoming-events.svg';
import { ReactComponent as Party } from './svg/party.svg';
import { ReactComponent as Phone } from './svg/phone.svg';
import { ReactComponent as KidsParty } from './svg/kids-party.svg';
import { ReactComponent as ActionGame } from './svg/actionGamePrice.svg';
import { ReactComponent as Galery } from './svg/galery.svg';
import { ReactComponent as GameMenu } from './svg/games-menu.svg';
import { ReactComponent as PriceMenu } from './svg/price-menu.svg';
import { ReactComponent as Date } from './svg/date.svg';
import { ReactComponent as Time } from './svg/time.svg';
import { ReactComponent as Duration } from './svg/duration.svg';

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
    // case 'moon':
    //   return <Moon className={props.className} />;
    case 'bat-1':
      return <Bat1 className={props.className} />;
    case 'bat-2':
      return <Bat2 className={props.className} />;
    case 'bat-3':
      return <Bat3 className={props.className} />;
    // case 'paintball':
    //   return <Paintball className={props.className} />;
    case 'mask':
      return <Mask className={props.className} />;
    case 'team':
      return <Team className={props.className} />;
    case 'strikeMan':
      return <StrikeMan className={props.className} />;
    case 'quadro':
      return <Quadro className={props.className} />;
    case 'cake':
      return <Cake className={props.className} />;
    case 'mustache':
      return <Mustache className={props.className} />;
    case 'rent':
      return <Rent className={props.className} />;
    case 'graduate':
      return <Graduation className={props.className} />;
    case 'paintballPrice':
      return <PaintballImg className={props.className} />;
    case 'events':
      return <Events className={props.className} />;
    case 'party':
      return <Party className={props.className} />;
    case 'phone':
      return <Phone className={props.className} />;
    case 'kidBalls':
      return <KidsParty className={props.className} />;
    case 'actionGamesPrice':
      return <ActionGame className={props.className} />;
    case 'galery':
      return <Galery className={props.className} />;
    case 'gameMenu':
      return <GameMenu className={props.className} />;
    case 'priceMenu':
      return <PriceMenu className={props.className} />;
    case 'date':
      return <Date className={props.className} />;
    case 'time':
      return <Time className={props.className} />;
    case 'duration':
      return <Duration className={props.className} />;
    default:
      return <Duration className={props.className} />;
  }
};

Icon.defaultProps = {
  className: '',
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;
