// INITIALSTATE AND FUNCTIONS BELOW ARE EXAMPLES/TESTS AND WILL BE CHANGED AS THE APP PROGRESSES

import React, { useReducer } from 'react';
import axios from 'axios';
import ClientContext from './clientContext';
import ClientReducer from './clientReducer';

import { GET_CLIENT, SEARCH_GROOMERS } from '../types';

const ClientState = props => {
  const initialState = {
    client: {},
    groomers: [],
  };

  const [state, dispatch] = useReducer(ClientReducer, initialState);

  // GET CLIENT INFO
  const getClient = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/1`);

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
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
};

export default ClientState;
