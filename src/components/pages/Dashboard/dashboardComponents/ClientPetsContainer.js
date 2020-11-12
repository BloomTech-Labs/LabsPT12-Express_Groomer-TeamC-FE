import React, { useContext } from 'react';
import UserContext from '../../../../state/user/userContext';
import DashboardContext from '../../../../state/dashboard/dashboardContext';
import ClientPetCard from './ClientPetCard';
import { Button } from 'antd';

const ClientPets = () => {
  const userContext = useContext(UserContext);
  const dashboardContext = useContext(DashboardContext);
  const { animals } = userContext.clientProfile;
  const { changeView } = dashboardContext;

  return (
    <div>
      <h1>Your Pets</h1>
      <Button type="primary" onClick={() => changeView(4)}>
        Add add a pet
      </Button>
      {animals.length < 1 && <h1>You do not have any pets listed</h1>}
      {animals.length > 0 && <ClientPetCard animals={animals} />}
    </div>
  );
};

export default ClientPets;
