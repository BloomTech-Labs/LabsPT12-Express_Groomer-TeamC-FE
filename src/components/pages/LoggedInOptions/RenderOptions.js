import React, { useContext } from 'react';
import ClientOptions from './ClientOptions';
import GroomerOptions from './GroomerOptions';
import ClientContext from '../../../state/client/clientContext';

function RenderOptions(props) {
  const clientContext = useContext(ClientContext);
  const { accountType, authState } = clientContext;

  return (
    <div>
      {authState.isAuthenticated && accountType === 'client' && (
        <ClientOptions />
      )}
      {authState.isAuthenticated && accountType === 'groomer' && (
        <GroomerOptions />
      )}
    </div>
  );
}
export default RenderOptions;
