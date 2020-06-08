import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Types } from '../../store/ducks/videos';

import { API_BASE_URL } from '../../config';

import SearchBar from './SearchBar';

const SearchBarContainer = () => {
  const dispatch = useDispatch();
  const search = (term, availability) => {
    dispatch({ type: Types.LOADING });
    axios
      .get(`${API_BASE_URL}/search`, {
        params: { term, availability: JSON.stringify(availability) },
      })
      .then((result) =>
        dispatch({ type: Types.FOUND, payload: { data: result.data } }),
      )
      .catch(() => dispatch({ type: Types.FAILED }));
  };
  return <SearchBar onSubmit={search} />;
};

export default SearchBarContainer;
