import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

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
      <Link
        aria-label={title}
        type="button"
        onClick={() => {
          handleOpenGallery(id, images);
        }}
        className="card__btn"
        to={`gallery/${id}`}
      >
        {console.log(title)}
        <img className={`card card--${type} card--${size}`} src={img} alt={title} />
      </Link>
    )
  );
};

RippedCard.defaultProps = {
  view: '',
  title: '',
  type: '',
  handleOpenGallery: () => {},
};

RippedCard.propTypes = {
  children: PropTypes.string,
  view: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleOpenGallery: PropTypes.func,
};

export default withTheme(RippedCard);
