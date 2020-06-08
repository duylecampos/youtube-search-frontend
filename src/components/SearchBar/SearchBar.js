import React from 'react';
import PropTypes from 'prop-types';

import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => (
  <div className={styles.SearchBar}>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        return onSubmit(e.target[0].value, [1, 2, 3, 4, 5, 6, 7]);
      }}
    >
      <input type="text" name="term" placeholder="Pesquisar" />
    </form>
  </div>
);
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
