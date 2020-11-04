import React, { useContext } from 'react';
import ClientOptions from './ClientOptions';
import GroomerOptions from './GroomerOptions';
import UserContext from '../../../state/user/userContext';

function RenderOptions(props) {
  const userContext = useContext(UserContext);
  const { accountType, authState } = userContext;

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
