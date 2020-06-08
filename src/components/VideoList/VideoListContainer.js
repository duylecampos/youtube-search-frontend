import React from 'react';
import { useSelector } from 'react-redux';
import VideoList from './VideoList';

const VideoListContainer = () => {
  const videos = useSelector((state) => state.items);
  const status = useSelector((state) => state.status);
  return <VideoList videos={videos} status={status} />;
};

export default VideoListContainer;
