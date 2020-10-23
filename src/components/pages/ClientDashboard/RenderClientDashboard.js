import React, { useContext } from 'react';
import ClientDashboardContainer from './ClientDashboardContainer';
import ClientContext from '../../../state/client/clientContext';

const RenderClientDashboard = () => {
  const clientContext = useContext(ClientContext);
  const { client } = clientContext;

  return (
    <div>
      {Object.keys(client).length < 1 ? (
        <h1>Loading</h1>
      ) : (
        <ClientDashboardContainer client={client} />
      )}
    </div>

    // <div>
    //     <ClientDashboardContainer />
    // </div>
  );
};

export default RenderClientDashboard;
