import React from 'react';
import Icon from '../components/ui/Icon';

export const handleSwitchMan = (type) => {
  switch (type) {
    case 'strike': return (
      <Icon name="strikeMan" className="l-man part08 banner__layer" />
    );
    case 'quadro': return (
      <Icon name="quadro" className="l-man part08 banner__layer" />
    );
    default: return (
      <Icon name="bg-man" className="l-man part08 banner__layer" />
    );
  }
};

export const addCoordinates = (array) => {
  array.forEach((item, index) => {
    if (index % 2 === 0 && index !== array.length - 1) {
      item.x = (index + 1) * 12;
      item.y = (index+1) * 80;
    } else if (index === array.length - 1) {
      item.x = (index) * 14;
      item.y = (index) * 40;
    } else {
      item.x = (index+1) * 12;
      item.y = (index+1) * 50;
    }
  });
};

export default handleSwitchMan;
