import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import './card.scss';

const RippedCard = ({
  theme,
  handleOpenGallery,
  type,
  title,
  img,
  id,
  images,
  size,
  ...props
}) => {
  const { view } = props;
  return (
    view === 'game' ? (
      <div
        style={{
          background: `url(${img})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '100% 100%',
          filter: theme.themeType === 'light' ? 'grayscale(1)' : 'none',
        }}
        className={`card card--${type} card--${size}`}
      />
    ) : (
      <button
        aria-label={title}
        type="button"
        onClick={() => {
          handleOpenGallery(id, images);
        }}
        className="locations-list__btn"
      >
        <img src={img} alt={title} />
      </button>
    )
  );
};

RippedCard.defaultProps = {
  view: 'game',
  title: '',
  type: '',
  handleOpenGallery: () => {},
};

RippedCard.propTypes = {
  children: PropTypes.string.isRequired,
  view: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleOpenGallery: PropTypes.func,
};

export default withTheme(RippedCard);
