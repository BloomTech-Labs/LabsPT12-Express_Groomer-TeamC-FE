// Example of how

import {
  GET_USER_PROFILE,
  SET_ACCOUNT_TYPE,
  UPDATE_PROFILE,
  GET_GROOMER_PROFILE,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        user_profile: action.payload,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        user_profile: action.payload,
      };
    case SET_ACCOUNT_TYPE:
      return {
        ...state,
        account_type: action.payload,
      };
    case GET_GROOMER_PROFILE:
      return {
        ...state,
        groomer_profile: action.payload,
      };
    default:
      return state;
  }
};
