// INITIALSTATE AND FUNCTIONS BELOW ARE EXAMPLES/TESTS AND WILL BE CHANGED AS THE APP PROGRESSES

import React, { useReducer } from 'react';
import axios from 'axios';
import ClientContext from './clientContext';
import ClientReducer from './clientReducer';
import { useOktaAuth } from '@okta/okta-react';
import { apiAuth } from '../../api';

import { GET_CLIENT, SEARCH_GROOMERS, SET_ACCOUNT_TYPE } from '../types';

const ClientState = props => {
  const initialState = {
    client: {},
    groomers: [], // *** NEED TO DELETE EVENTUALLY ***
    account_type: '',
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

  // SEARCH GROOMERS *** NEED TO DELETE EVENTUALLY ***
  const searchGroomers = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);

    dispatch({
      type: SEARCH_GROOMERS,
      payload: res.data,
    });
  };

  // SET ACCOUNT TYPE TO CLIENT OR GROOMER *** THIS WILL CHANGE ***
  const setAccountType = () => {
    const userCode = state.client.user_type;
    const userKey = {
      '035f3a60-0de0-11eb-93e6-ddb47fc994e4': 'client',
      'dc885650-0de0-11eb-8250-a5697c93ae91': 'groomer',
    };

    dispatch({
      type: SET_ACCOUNT_TYPE,
      payload: userKey[userCode],
    });
  };

  return (
    <ClientContext.Provider
      value={{
        client: state.client,
        groomers: state.groomers, // *** NEED TO DELETE EVENTUALLY ***
        accountType: state.account_type,
        getClient,
        searchGroomers, // *** NEED TO DELETE EVENTUALLY ***
        setAccountType,
        authState,
        authService,
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
};

export default ClientState;
