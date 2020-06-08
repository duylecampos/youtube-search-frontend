import React from 'react';
import { useSelector } from 'react-redux';
import WordsCounter from './WordsCounter';

const WordsCounterContainer = () => {
  const commonWords = useSelector((state) => state.common_words);
  const words = Object.keys(commonWords).map((key) => {
    return { value: key, occurrences: commonWords[key] };
  });
  const sortedWords = words.sort((a, b) =>
    a.occurrences > b.occurrences ? -1 : 1,
  );
  return sortedWords.length > 0 ? <WordsCounter words={sortedWords} /> : null;
};

export default WordsCounterContainer;
