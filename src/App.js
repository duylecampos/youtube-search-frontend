/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar';
import WordsCounter from './components/WordsCounter';
import TimeSpent from './components/TimeSpent';

function App() {
  return (
    <div className="App" style={{ maxWidth: 1200, margin: '0 auto' }}>
      <SearchBar />
      <WordsCounter />
      <hr />
      <TimeSpent />
      <VideoList />
    </div>
  );
}

export default App;
