import React from 'react';

import './parallax.scss';

const uuidv4 = require('uuid/v4');

const Parallax = ({ layersGroup, content }) => (
  <div className="parallax">
    {
      layersGroup.map(layer => (
        <div key={uuidv4()} className="parallax__group">
          <div className="parallax__layer parallax__layer--back">
            {layer}
          </div>
          {
            content ? (
              <div className="parallax__layer parallax__layer--base">
                {content}
              </div>
            ) : null
          }

        </div>
      ))
    }
  </div>
);

export default Parallax;
