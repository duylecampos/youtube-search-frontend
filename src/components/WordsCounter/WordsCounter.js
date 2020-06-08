import React from 'react';
import PropTypes from 'prop-types';

import styles from './WordsCounter.module.css';

const WordsCounter = ({ words }) => (
  <div className={styles.WordsCounter}>
    <p>Palavras mais presentes: </p>
    {words.map((word) => (
      <span>
        {word.value}: {word.occurrences}
      </span>
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
