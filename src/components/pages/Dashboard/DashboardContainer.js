import React, { useContext } from 'react';
import RenderClientDashboard from './RenderClientDashboard';
import RenderGroomerDashboard from './RenderGroomerDashboard';
import ClientContext from '../../../state/client/clientContext';

import { Spinner } from '../../common';

const DashboardContainer = () => {
  const clientContext = useContext(ClientContext);
  const { client, accountType, authState } = clientContext;

  return (
    <div>
      {authState.isAuthenticated && accountType === 'client' && (
        <div>
          {Object.keys(client).length < 1 ? (
            <Spinner />
          ) : (
            <RenderClientDashboard client={client} />
          )}
        </div>
      )}
      {authState.isAuthenticated && accountType === 'groomer' && (
        <div>
          {Object.keys(client).length < 1 ? (
            <Spinner />
          ) : (
            <RenderGroomerDashboard client={client} />
          )}
        </div>
      )}
    </div>
  );
};

export default DashboardContainer;
