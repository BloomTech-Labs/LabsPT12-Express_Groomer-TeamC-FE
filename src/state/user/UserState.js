// INITIALSTATE AND FUNCTIONS BELOW ARE EXAMPLES/TESTS AND WILL BE CHANGED AS THE APP PROGRESSES

import React, { useReducer } from 'react';
import UserContext from './userContext';
import ClientReducer from './userReducer';
import { useOktaAuth } from '@okta/okta-react';
import { apiAuth } from '../../api';

import {
  FETCH_GROOMER_PROFILE,
  GET_USER_PROFILE,
  SET_ACCOUNT_TYPE,
  UPDATE_PROFILE,
  GET_CLIENT_PROFILE,
  GET_GROOMER_SERVICES,
  CREATE_NEW_APPOINTMENT,
} from '../types';

const UserState = props => {
  const initialState = {
    user_profile: {},
    account_type: '',
    groomer_profile: {},
    client_profile: {},
    groomer_services: [],
    client_appointments: [],
  };

  const [state, dispatch] = useReducer(ClientReducer, initialState);

  // OKTA AUTH METHODS
  const { authState, authService } = useOktaAuth();

  // GET USER PROFILE INFO
  const getUserProfile = async email => {
    const res = await apiAuth(authState).post(
      `https://labspt12-express-groomer-c-api.herokuapp.com/profiles/fetch-by-email`,
      email
    );

    dispatch({
      type: GET_USER_PROFILE,
      payload: res.data,
    });
  };

  // UPDATE USER PROFILE INFO
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

  // GET GROOMER INFORMATION (IF USER IS A GROOMER)
  const fetchGroomerProfile = async profile_id => {
    const res = await apiAuth(authState).get(
      `https://labspt12-express-groomer-c-api.herokuapp.com/groomers/${profile_id}`
    );
    await console.log(res.data);
    dispatch({
      type: FETCH_GROOMER_PROFILE,
      payload: res.data,
    });
  };

  // GET ALL EXISTING GROOMER SERVICES
  const getGroomerServices = async () => {
    const res = await apiAuth(authState).get(
      `https://labspt12-express-groomer-c-api.herokuapp.com/services`
    );

    dispatch({
      type: GET_GROOMER_SERVICES,
      payload: res.data,
    });
  };

  // ADD NEW GROOMER SERVICE
  const addNewService = async (newService, id) => {
    await apiAuth(authState).post(
      `https://labspt12-express-groomer-c-api.herokuapp.com/services`,
      newService
    );
    await fetchGroomerProfile(id);
  };

  // UPDATE GROOMER SERVICE
  const updateGroomerService = async (updatedService, id) => {
    await apiAuth(authState).put(
      `https://labspt12-express-groomer-c-api.herokuapp.com/services`,
      updatedService
    );
    await fetchGroomerProfile(id);
  };

  // DELETE GROOMER SERVICE
  const deleteGroomerService = async (serviceId, id) => {
    await apiAuth(authState).delete(
      `https://labspt12-express-groomer-c-api.herokuapp.com/services/${serviceId}`
    );
    await fetchGroomerProfile(id);
  };

  // GET CLIENT PROFILE
  const fetchClientProfile = async profile_id => {
    const res = await apiAuth(authState).get(
      `https://labspt12-express-groomer-c-api.herokuapp.com/clients/${profile_id}`
    );

    dispatch({
      type: GET_CLIENT_PROFILE,
      payload: res.data,
    });
  };

  // CLIENT: ADD NEW PET
  const addClientPet = async (newPet, id) => {
    await apiAuth(authState).post(
      `https://labspt12-express-groomer-c-api.herokuapp.com/animals`,
      newPet
    );
    await fetchClientProfile(id);
  };

  // CLIENT: UPDATE PET
  const updatePet = async (updatedPet, id) => {
    await apiAuth(authState).put(
      `https://labspt12-express-groomer-c-api.herokuapp.com/animals`,
      updatedPet
    );
    await fetchClientProfile(id);
  };

  // CLIENT: DELETE PET
  const deletePet = async (petId, id) => {
    await apiAuth(authState).delete(
      `https://labspt12-express-groomer-c-api.herokuapp.com/animals/${petId}`
    );
    await fetchClientProfile(id);
  };

  // CLIENT: CREATE NEW APPOINTMENT WITH GROOMER
  const createNewAppt = async newAppt => {
    const res = await apiAuth(authState).post(
      `https://labspt12-express-groomer-c-api.herokuapp.com/appointments/schedule`,
      newAppt
    );
    await console.log(res);

    dispatch({
      type: CREATE_NEW_APPOINTMENT,
      payload: res.data,
    });
  };

  return (
    <UserContext.Provider
      value={{
        userProfile: state.user_profile,
        groomerProfile: state.groomer_profile,
        clientProfile: state.client_profile,
        accountType: state.account_type,
        groomerServices: state.groomer_services,
        getUserProfile,
        fetchGroomerProfile,
        fetchClientProfile,
        setAccountType,
        addClientPet,
        updatePet,
        deletePet,
        authState,
        authService,
        updateProfile,
        getGroomerServices,
        addNewService,
        deleteGroomerService,
        updateGroomerService,
        createNewAppt,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
