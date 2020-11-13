import React, { useContext } from 'react';
import UserContext from '../../../../state/user/userContext';
import DashboardContext from '../../../../state/dashboard/dashboardContext';
import GroomerServiceCard from './GroomerServiceCard';

import { Button } from 'antd';

const GroomerServicesContainer = () => {
  const userContext = useContext(UserContext);
  const dashboardContext = useContext(DashboardContext);

  const { groomerProfile, deleteGroomerService } = userContext;
  const { changeView } = dashboardContext;

  return (
    <div>
      <h1>Your Services</h1>
      <Button type="primary" onClick={() => changeView(6)}>
        Add a new service
      </Button>
      {groomerProfile.services.length < 1 && (
        <h1>You do not have any services listed</h1>
      )}
      {groomerProfile.services.length > 0 && (
        <GroomerServiceCard
          deleteService={deleteGroomerService}
          groomerProfile={groomerProfile}
          services={groomerProfile.services}
        />
      )}
    </div>
  );
};

export default GroomerServicesContainer;
