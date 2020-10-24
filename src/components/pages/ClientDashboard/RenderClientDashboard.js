import React, { useContext } from 'react';
import ClientDashboardContainer from './ClientDashboardContainer';
import ClientContext from '../../../state/client/clientContext';

import { Spinner } from '../../common';

const RenderClientDashboard = () => {
  const clientContext = useContext(ClientContext);
  const { client } = clientContext;

  return (
    <div>
      {Object.keys(client).length < 1 ? (
        <Spinner />
      ) : (
        <ClientDashboardContainer client={client} />
      )}
    </div>
  );
};

export default RenderClientDashboard;
