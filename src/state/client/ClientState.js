// INITIALSTATE AND FUNCTIONS BELOW ARE EXAMPLES/TESTS AND WILL BE CHANGED AS THE APP PROGRESSES

import React, { useReducer } from 'react';
import axios from 'axios';
import ClientContext from './clientContext';
import ClientReducer from './clientReducer';
import { useOktaAuth } from '@okta/okta-react';
import { apiAuth } from '../../api';

import { GET_CLIENT, SEARCH_GROOMERS } from '../types';

const ClientState = props => {
  const initialState = {
    client: {},
    groomers: [],
  };

  const [state, dispatch] = useReducer(ClientReducer, initialState);

  // OKTA AUTH METHODS
  const { authState, authService } = useOktaAuth();

  // GET CLIENT INFO
  const getClient = async email => {
    const res = await apiAuth(authState).post(
      `https://labspt12-express-groomer-c-api.herokuapp.com/profiles/fetch-by-email`,
      email
    );
    // await console.log(res);

    dispatch({
      type: GET_CLIENT,
      payload: res.data,
    });
  };

  // SEARCH GROOMERS
  const searchGroomers = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);

    dispatch({
      type: SEARCH_GROOMERS,
      payload: res.data,
    });
  };

  return (
    <ClientContext.Provider
      value={{
        client: state.client,
        groomers: state.groomers,
        getClient,
        searchGroomers,
        authState,
        authService,
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
};

export default ClientState;
