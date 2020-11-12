import React, { useContext } from 'react';
import UserContext from '../../../../state/user/userContext';
import { useHistory } from 'react-router-dom';
import ClientPetCard from './ClientPetCard';
import { Button } from 'antd';

const ClientPets = () => {
  const userContext = useContext(UserContext);
  const { animals } = userContext.clientProfile;

  const history = useHistory();

  return (
    <div>
      <h1>Your Pets</h1>
      <Button type="primary" onClick={() => history.push('/add-pet')}>
        Add add a pet
      </Button>
      {animals.length < 1 && <h1>You do not have any pets listed</h1>}
      {animals.length > 0 && <ClientPetCard animals={animals} />}
    </div>
  );
};

export default ClientPets;
