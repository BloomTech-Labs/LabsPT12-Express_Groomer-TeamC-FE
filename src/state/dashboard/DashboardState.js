import React, { useReducer } from 'react';
import DashboardContext from './dashboardContext';
import DashboardReducer from './dashboardReducer';

import { SET_DASHBOARD_VIEW, SET_PET_TO_UPDATE } from '../types';

const DashboardState = props => {
  const initialState = {
    dashboard_view: 1,
    pet_to_update: {},
  };

  const [state, dispatch] = useReducer(DashboardReducer, initialState);

  // CHANGE DASHBOARD VIEW
  const changeView = viewValue =>
    dispatch({ type: SET_DASHBOARD_VIEW, payload: viewValue });

  // SET PET TO UPDATE (CURRENT PET INFO BEFORE UPDATE)
  const setPetToUpdate = pet =>
    dispatch({ type: SET_PET_TO_UPDATE, payload: pet });

  return (
    <DashboardContext.Provider
      value={{
        dashView: state.dashboard_view,
        petToUpdate: state.pet_to_update,
        setPetToUpdate,
        changeView,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardState;
