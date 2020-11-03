// INITIALSTATE AND FUNCTIONS BELOW ARE EXAMPLES/TESTS AND WILL BE CHANGED AS THE APP PROGRESSES

import React, { useReducer } from 'react';
import UserContext from './userContext';
import ClientReducer from './userReducer';
import { useOktaAuth } from '@okta/okta-react';
import { apiAuth } from '../../api';

import { GET_USER_PROFILE, SET_ACCOUNT_TYPE, UPDATE_PROFILE } from '../types';

const UserState = props => {
  const initialState = {
    user_profile: {},
    account_type: '',
    groomer_profile: {},
  };

  const [state, dispatch] = useReducer(ClientReducer, initialState);

  // OKTA AUTH METHODS
  const { authState, authService } = useOktaAuth();

  // GET CLIENT INFO
  const getUserProfile = async email => {
    const res = await apiAuth(authState).post(
      `https://labspt12-express-groomer-c-api.herokuapp.com/profiles/fetch-by-email`,
      email
    );
    await console.log(res.data);

    dispatch({
      type: GET_USER_PROFILE,
      payload: res.data,
    });
  };

  // UPDATE CLIENT INFO
  const updateProfile = async update => {
    const res = await apiAuth(authState).put(
      `https://labspt12-express-groomer-c-api.herokuapp.com/profiles`,
      update
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data.profile,
    });
  };

  // SET ACCOUNT TYPE TO CLIENT OR GROOMER
  const setAccountType = () => {
    const userCode = state.user_profile.user_type;
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
    <UserContext.Provider
      value={{
        userProfile: state.user_profile,
        groomerProfile: state.groomer_profile,
        accountType: state.account_type,
        getUserProfile,
        setAccountType,
        authState,
        authService,
        updateProfile,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
