import React from 'react';
import PropTypes from 'prop-types';

const TimeSpent = ({ time }) => <div>{time}</div>;

TimeSpent.propTypes = {
  time: PropTypes.number.isRequired,
};

export default TimeSpent;
