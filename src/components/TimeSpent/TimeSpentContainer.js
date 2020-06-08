import React from 'react';
import { useSelector } from 'react-redux';
import TimeSpent from './TimeSpent';

const TimeSpentContainer = () => {
  const timeSpent = useSelector((state) => state.days_to_watch_all);
  return timeSpent ? <TimeSpent time={timeSpent} /> : null;
};

export default TimeSpentContainer;
