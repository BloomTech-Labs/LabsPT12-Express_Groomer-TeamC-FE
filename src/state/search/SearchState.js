import React, { useReducer } from 'react';
import SearchContext from './searchContext';
import SearchReducer from './searchReducer';
import { useOktaAuth } from '@okta/okta-react';
import { apiAuth } from '../../api';

import {
  SEARCH_ALL_GROOMERS,
  SEARCH_GROOMERS_BY,
  GET_GROOMER_PROFILE,
  CLEAR_GROOMER,
} from '../types';

const SearchState = props => {
  const initialState = {
    groomers: [],
    groomer: {},
  };

  const [state, dispatch] = useReducer(SearchReducer, initialState);

  // OKTA AUTH METHODS
  const { authState, authService } = useOktaAuth();

  // SEARCH ALL GROOMERS
  const searchAllGroomers = async () => {
    const res = await apiAuth(authState).get(
      `https://labspt12-express-groomer-c-api.herokuapp.com/groomers`
    );

    dispatch({
      type: SEARCH_ALL_GROOMERS,
      payload: res.data,
    });
  };

  // SEARCH GROOMERS BY NAME, CITY, STATE
  const searchGroomersBy = async filter => {
    const res = await apiAuth(authState).get(
      `https://labspt12-express-groomer-c-api.herokuapp.com/search/groomers?q=${filter}`
    );

    dispatch({
      type: SEARCH_GROOMERS_BY,
      payload: res.data,
    });
  };

  // GET_GROOMER_PROFILE
  const getGroomerProfile = async profile_id => {
    const res = await apiAuth(authState).get(
      `https://labspt12-express-groomer-c-api.herokuapp.com/groomers/${profile_id}`
    );

    await console.log(res.data);
    dispatch({
      type: GET_GROOMER_PROFILE,
      payload: res.data,
    });
  };

  // CLEAR GROOMER PROFILE
  const clearGroomer = () => dispatch({ type: CLEAR_GROOMER });

  return (
    <SearchContext.Provider
      value={{
        groomers: state.groomers,
        groomer: state.groomer,
        searchAllGroomers,
        searchGroomersBy,
        getGroomerProfile,
        clearGroomer,
        authState,
        authService,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchState;
