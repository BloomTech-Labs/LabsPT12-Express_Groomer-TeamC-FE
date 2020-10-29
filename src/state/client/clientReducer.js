// Example of how

import { GET_CLIENT, SET_ACCOUNT_TYPE, UPDATE_PROFILE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_CLIENT:
      return {
        ...state,
        client: action.payload,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        client: action.payload,
      };
    case SET_ACCOUNT_TYPE:
      return {
        ...state,
        account_type: action.payload,
      };
    default:
      return state;
  }
};
