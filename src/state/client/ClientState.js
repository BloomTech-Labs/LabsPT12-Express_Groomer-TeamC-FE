// INITIALSTATE AND FUNCTIONS BELOW ARE EXAMPLES/TESTS AND WILL BE CHANGED AS THE APP PROGRESSES

import React, { useReducer } from 'react';
import ClientContext from './clientContext';
import ClientReducer from './clientReducer';
import { useOktaAuth } from '@okta/okta-react';
import { apiAuth } from '../../api';

import { GET_CLIENT, SET_ACCOUNT_TYPE } from '../types';

const ClientState = props => {
  const initialState = {
    client: {},
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

    dispatch({
      type: GET_CLIENT,
      payload: res.data,
    });
  };

  // SET ACCOUNT TYPE TO CLIENT OR GROOMER
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
        accountType: state.account_type,
        getClient,
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
