import React from 'react';
import PropTypes from 'prop-types';

const WordsCounter = ({ words }) => (
  <div>
    {words.map((word) => (
      <p>
        {word.value}
        <span>{word.occurrences}</span>
      </p>
    ))}
  </div>
);

WordsCounter.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      occurrences: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default WordsCounter;
