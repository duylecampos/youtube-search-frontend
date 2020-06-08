import React from 'react';
import PropTypes from 'prop-types';

import styles from './TimeSpent.module.css';

const TimeSpent = ({ time }) => (
  <div className={styles.TimeSpent}>
    <p>
      Você levará <span>{time} dia(s)</span> para assistir todos os videos dessa
      lista
    </p>
  </div>
);

TimeSpent.propTypes = {
  time: PropTypes.number.isRequired,
};

export default TimeSpent;
