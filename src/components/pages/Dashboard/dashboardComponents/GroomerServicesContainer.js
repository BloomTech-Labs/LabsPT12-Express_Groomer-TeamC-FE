import React, { useContext } from 'react';
import UserContext from '../../../../state/user/userContext';
import GroomerServiceCard from './GroomerServiceCard';

const GroomerServicesContainer = () => {
  const userContext = useContext(UserContext);

  const { services } = userContext.groomerProfile;

  return (
    <div>
      <h1>Your Services</h1>
      {services.length < 1 && <h1>You do not have any services listed</h1>}
      {services.length > 0 && <GroomerServiceCard services={services} />}
    </div>
  );
};

export default GroomerServicesContainer;
