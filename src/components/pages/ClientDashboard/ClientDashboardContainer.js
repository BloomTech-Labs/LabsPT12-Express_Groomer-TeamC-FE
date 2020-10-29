import React, { useContext } from 'react';
import RenderClientDashboard from './RenderClientDashboard';
import ClientContext from '../../../state/client/clientContext';

import { Spinner } from '../../common';

const ClientDashboardContainer = () => {
  const clientContext = useContext(ClientContext);
  const { client, accountType } = clientContext;

  return (
    <div>
      {Object.keys(client).length < 1 ? (
        <Spinner />
      ) : (
        <RenderClientDashboard client={client} type={accountType} />
      )}
    </div>
  );
};

export default ClientDashboardContainer;
