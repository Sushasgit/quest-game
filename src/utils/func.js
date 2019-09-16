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

// const coordinate = [
//   {
//     'item.x': 12,
//     'item.x2': 12,
//     'item.y': 80,
//     'item.y2': 80,
//   },
//   {
//     'item.x': 24,
//     'item.x2': 12,
//     'item.y': 100,
//     'item.y2': 80,
//   },
//   {
//     'item.x': 36,
//     'item.x2': 12,
//     'item.y': 240,
//     'item.y2': 80,
//   },
//   {
//     'item.x': 48,
//     'item.x2': 12,
//     'item.y': 200,
//     'item.y2': 80,
//   },
//   {
//     'item.x': 60,
//     'item.x2': 12,
//     'item.y': 400,
//     'item.y2': 80,
//   },
//   {
//     'item.x': 72,
//     'item.x2': 12,
//     'item.y': 300,
//     'item.y2': 80,
//   },
//   {
//     'item.x': 84,
//     'item.x2': 12,
//     'item.y': 240,
//     'item.y2': 80,
//   },
// ];

export const addCoordinates = (array) => {
  array.forEach((item, index) => {
    if (index % 2 === 0 && index !== array.length - 1 && index !== 4) {
      item.x = (index + 1) * 12;
      item.x2 = (index + 1) * 12;
      item.y = (index + 1) * 80;
      item.y2 = (index + 1) * (80);
    } else if (index === 4) {
      item.x = (index + 1) * 12;
      item.y = (index + 1) * 80;
      item.x2 = (index + 1) * 11;
      item.y2 = (index - 1) * (50);
    } else if (index === array.length - 1) {
      item.x = (index) * 14;
      item.x2 = (index) * 14;
      item.y = (index) * 40;
      item.y2 = (index + 1) * (40);
    } else {
      item.x = (index + 1) * 12;
      item.x2 = (index + 1) * 20;
      item.y = (index + 1) * 50;
      item.y2 = (index + 1) * (-20);
    }
  });
};


export default handleSwitchMan;
