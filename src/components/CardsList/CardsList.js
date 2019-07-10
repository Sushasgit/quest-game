import React from 'react';

import { CARDS_DATA } from '../../utils/constants';

import './cards-list.scss';

const CardsList = () => (
  <div className="bg">
    <h2 className="main-title">Наши игры</h2>
    <ul className="cards flex">
      {
        CARDS_DATA.map(item => (
          <li key={item.id}>
            <svg width="500" height="300">
              <defs>
                <filter
                  id="filter"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                  filterUnits="objectBoundingBox"
                  primitiveUnits="userSpaceOnUse"
                  colorInterpolationFilters="linearRGB"
                >
                  <feTurbulence
                    type="turbulence"
                    baseFrequency="0.01 0.05"
                    numOctaves="2"
                    seed="2"
                    stitchTiles="noStitch"
                    result="turbulence"
                  />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="turbulence"
                    scale="96"
                    xChannelSelector="G"
                    yChannelSelector="A"
                    result="displacementMap"
                  />
                </filter>
              </defs>
              <rect
                fill="#1a1a1a"
                filter="url(#filter)"
                width="500"
                height="300"
                x="0"
                y="0"
              />
              <foreignObject width="500" height="300">
                <div className={`card card--${item.imgBg}`}>
                  <h3 className="card__title">
                    {item.title}
                  </h3>
                  <p>
                    {item.description}
                  </p>
                  <a className="card__link" href="/">
                      Подробнее
                  </a>
                </div>
              </foreignObject>
            </svg>
          </li>
        ))
    }
    </ul>
  </div>
);

export default CardsList;
