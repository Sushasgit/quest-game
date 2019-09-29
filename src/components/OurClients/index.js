import React from 'react';

import provectus from './provectus-logo.svg';
import netpeak from './netpeak-logo.svg';
import lux from './lux_logo.png';
import serpstat from './serpstat.svg';
import chapps from './chapps-logos.svg';
import southPort from './south-port.png';
import hilty from './hilty-logo.svg';
import quarnuts from './quarnuts.svg';
import MT from './mt-logo.svg';
import vertical from './vertical-logo.svg';

import Title from '../ui/Title';
import './clients.scss';

const OurClients = () => (
  <React.Fragment>
    <Title primary level={2}>
        Гости проекта
    </Title>
    <ul className="list">
      <li className="card-client">
        <img src={provectus} alt="Provectus logo" />
      </li>
      <li className="card-client">
        <img src={netpeak} alt="Netpeak logo" />
      </li>
      <li className="card-client">
        <img src={lux} alt="Lux logo" />
      </li>
      <li className="card-client">
        <img src={serpstat} alt="Serpstat logo" />
      </li>
      <li className="card-client">
        <img src={chapps} alt="Chapps logo" />
      </li>
      <li className="card-client">
        <img src={southPort} alt="South port logo" />
      </li>
      <li className="card-client">
        <img src={hilty} alt="Hilty logo" />
      </li>
      <li className="card-client">
        <img src={quarnuts} alt="Quarnuts logo" />
      </li>
      <li className="card-client">
        <img src={MT} alt="MT logo" />
      </li>
      <li className="card-client">
        <img src={vertical} alt="Vertical logo" />
      </li>
    </ul>
  </React.Fragment>
);

export default OurClients;
