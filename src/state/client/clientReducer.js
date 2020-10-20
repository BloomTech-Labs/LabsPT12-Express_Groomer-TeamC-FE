// Example of how

import { GET_CLIENT, SEARCH_GROOMERS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_CLIENT:
      return {
        ...state,
        client: action.payload,
      };
    case SEARCH_GROOMERS:
      return {
        ...state,
        groomers: action.payload,
      };
    default:
      return state;
  }
};
