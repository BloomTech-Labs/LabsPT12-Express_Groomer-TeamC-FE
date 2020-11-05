import React, { useContext } from 'react';
import UserContext from '../../../../state/user/userContext';
import ClientPetCard from './ClientPetCard';

const ClientPets = () => {
  const userContext = useContext(UserContext);
  const { animals } = userContext.clientProfile;

  return (
    <div>
      <h1>Your Pets</h1>
      {animals.length < 1 && <h1>You do not have any pets listed</h1>}
      {animals.length > 0 && <ClientPetCard animals={animals} />}
    </div>
  );
};

export default ClientPets;
