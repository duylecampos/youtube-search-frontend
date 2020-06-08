import React from 'react';
import PropTypes from 'prop-types';
import Video from './Video';

import styles from './VideoList.module.css';

const VideoList = ({ videos, status }) => (
  <div className={styles.VideoList}>
    {status !== 'loading' ? (
      videos.map((video) => (
        <Video
          title={video.title}
          description={video.description}
          thumbnail={video.thumbnail}
        />
      ))
    ) : (
      <div className={styles.loading}>Carregando</div>
    )}
  </div>
);

VideoList.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }),
  ).isRequired,
  status: PropTypes.string.isRequired,
};

export default VideoList;
