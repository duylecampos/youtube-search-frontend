import React from 'react';
import PropTypes from 'prop-types';

import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const validateAvailability = ({ target }) => {
    const items = target.value.split(',');
    if (items.length !== 7) {
      target.setCustomValidity(
        'Esse campo deve possuir 7 numeros separado por vírgula',
      );
    } else {
      target.setCustomValidity('');
    }
  };

  const parseForm = (e) => {
    e.preventDefault();
    const rawAvailability = e.target.availability.value.split(',');
    const availability = rawAvailability.map((i) => parseInt(i));
    const term = e.target.term.value;
    return onSubmit(term, availability);
  };

  return (
    <div className={styles.SearchBar}>
      <form onSubmit={parseForm}>
        <input
          type="text"
          name="term"
          className={styles.term}
          placeholder="Pesquisar"
          required
        />
        <span className={styles.availabilityWrapper}>
          <input
            type="text"
            name="availability"
            className={styles.availability}
            placeholder="Qual a sua disponibilidade"
            onInput={validateAvailability}
            required
          />
          <button
            type="button"
            className={styles.tooltip}
            data-title="Digite sua disponibilidade nos proximos 7 dias (em minutos) separada por virgula. Ex: 15, 120, 30, 150, 20, 40, 90"
          >
            ?
          </button>
          <button type="submit" className={styles.submit}>
            Buscar
          </button>
        </span>
      </form>
    </div>
  );
};
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
