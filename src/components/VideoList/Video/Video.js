import React from 'react';
import PropTypes from 'prop-types';

import styles from './Video.module.css';

const Video = ({ title, description, thumbnail }) => {
  return (
    <div className={styles.Video}>
      <img src={thumbnail} alt="Miniatura do video" />
      <div className="">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
Video.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Video;
