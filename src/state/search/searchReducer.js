import {
  SEARCH_ALL_GROOMERS,
  SEARCH_GROOMERS_BY,
  GET_GROOMER_PROFILE,
  CLEAR_GROOMER,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_ALL_GROOMERS:
      return {
        ...state,
        groomers: action.payload,
      };
    case SEARCH_GROOMERS_BY:
      return {
        ...state,
        groomers: action.payload,
      };
    case GET_GROOMER_PROFILE:
      return {
        ...state,
        groomer: action.payload,
      };
    case CLEAR_GROOMER:
      return {
        ...state,
        groomer: {},
      };
    default:
      return state;
  }
};
