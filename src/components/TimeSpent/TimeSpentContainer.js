import React from 'react';
import { useSelector } from 'react-redux';
import TimeSpent from './TimeSpent';

const TimeSpentContainer = () => {
  const timeSpent = useSelector((state) => state.days_to_watch_all);
  return <TimeSpent time={timeSpent} />;
};

export default TimeSpentContainer;
