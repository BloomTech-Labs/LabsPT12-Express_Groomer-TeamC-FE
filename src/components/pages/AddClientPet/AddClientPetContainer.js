import React, { useContext, useEffect } from 'react';
import RenderAddClientPet from './RenderAddClientPet';
import UserContext from '../../../state/user/userContext';
import { useHistory } from 'react-router-dom';

const AddClientPetContainer = () => {
  const history = useHistory();

  const userContext = useContext(UserContext);

  const { clientProfile, addClientPet } = userContext;

  useEffect(() => {
    if (Object.keys(clientProfile).length < 1) {
      history.push('/user-dash');
    }
  }, []);

  return (
    <div>
      <RenderAddClientPet
        clientProfile={clientProfile}
        addClientPet={addClientPet}
      />
    </div>
  );
};

export default AddClientPetContainer;
