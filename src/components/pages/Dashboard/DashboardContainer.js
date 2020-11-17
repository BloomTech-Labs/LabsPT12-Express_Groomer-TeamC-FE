import React, { useContext, useEffect } from 'react';
import RenderClientDashboard from './RenderClientDashboard';
import RenderGroomerDashboard from './RenderGroomerDashboard';
import UserContext from '../../../state/user/userContext';

import { Spinner } from '../../common';

const DashboardContainer = () => {
  const userContext = useContext(UserContext);
  const {
    userProfile,
    accountType,
    authState,
    fetchGroomerProfile,
    fetchClientProfile,
    clientProfile,
  } = userContext;

  useEffect(() => {
    if (accountType === 'groomer') {
      fetchGroomerProfile(userProfile.id);
    } else if (
      accountType === 'client' &&
      Object.keys(clientProfile).length < 1
    ) {
      fetchClientProfile(userProfile.id);
    }
  }, [accountType]);

  return (
    <div>
      {authState.isAuthenticated && accountType === 'client' && (
        <div>
          {Object.keys(userProfile).length < 1 ? (
            <Spinner />
          ) : (
            <RenderClientDashboard user={userProfile} />
          )}
        </div>
      )}
      {authState.isAuthenticated && accountType === 'groomer' && (
        <div>
          {Object.keys(userProfile).length < 1 ? (
            <Spinner />
          ) : (
            <RenderGroomerDashboard user={userProfile} />
          )}
        </div>
      )}
    </div>
  );
};

export default DashboardContainer;
