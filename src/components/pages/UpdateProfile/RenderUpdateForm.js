import React, { useContext } from 'react';
import UpdateFormContainer from './UpdateFormContainer';
import ClientContext from '../../../state/client/clientContext';

const RenderUpdateForm = () => {
  const clientContext = useContext(ClientContext);

  const { client, accountType, updateProfile } = clientContext;

  return (
    <div>
      <UpdateFormContainer
        client={client}
        type={accountType}
        updateProfile={updateProfile}
      />
    </div>
  );
};

export default RenderUpdateForm;
