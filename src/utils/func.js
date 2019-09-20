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

export default handleSwitchMan;
