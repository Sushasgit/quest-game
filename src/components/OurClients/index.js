import React from 'react';

import provectus from './provectus-logo.svg';
import netpeak from './netpeak-logo.svg';
import lux from './lux_logo.png';
import serpstat from './serpstat.svg';
import chapps from './chapps-logos.svg';
import southPort from './south-port.png';
import hilty from './hilty-logo.svg';
import quarnuts from './quarnuts.svg';

import Title from '../ui/Title';
import './clients.scss';

const OurClients = () => (
    <React.Fragment>
        <Title primary level={2}>
            Гости проекта
        </Title>
        <ul className="list">
        <li className="card-client" >
            <img src={provectus} />
        </li>
        <li className="card-client">
            <img src={netpeak} />
        </li>
        <li className="card-client">
            <img src={lux} />
        </li>
        <li className="card-client">
            <img src={serpstat} />
        </li>
        <li className="card-client">
            <img src={chapps} />
        </li>
        <li className="card-client">
            <img src={southPort} />
        </li>
        <li className="card-client">
            <img src={hilty} />
        </li>
        <li className="card-client">
            <img src={quarnuts} />
        </li>
    </ul>
    </React.Fragment>
);

export default OurClients;
