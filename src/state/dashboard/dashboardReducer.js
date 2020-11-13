import {
  SET_DASHBOARD_VIEW,
  SET_PET_TO_UPDATE,
  SET_SERVICE_TO_UPDATE,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_DASHBOARD_VIEW:
      return {
        ...state,
        dashboard_view: action.payload,
      };
    case SET_PET_TO_UPDATE:
      return {
        ...state,
        pet_to_update: action.payload,
      };
    case SET_SERVICE_TO_UPDATE:
      return {
        ...state,
        service_to_update: action.payload,
      };
    default:
      return state;
  }
};
