import React, { useState, useEffect, useContext } from 'react';
import DashboardContext from '../../../../state/dashboard/dashboardContext';
import UserContext from '../../../../state/user/userContext';
import { Card, Button } from 'antd';

const ServiceUpdateForm = () => {
  const userContext = useContext(UserContext);
  const dashboardContext = useContext(DashboardContext);

  const { updateGroomerService, groomerProfile } = userContext;
  const { serviceToUpdate, changeView } = dashboardContext;

  const [updateService, setUpdateService] = useState({
    id: '',
    name: '',
    description: '',
    cost: 0,
  });

  useEffect(() => {
    if (Object.keys(serviceToUpdate).length > 0) {
      setUpdateService({
        id: serviceToUpdate.serviceId,
        name: serviceToUpdate.name,
        description: serviceToUpdate.description,
        cost: serviceToUpdate.cost,
      });
    }
  }, [serviceToUpdate]);

  const handleSubmit = e => {
    e.preventDefault();
    updateGroomerService(updateService, groomerProfile.profile_id);
    changeView(2);
  };

  const handleChange = e => {
    setUpdateService({ ...updateService, [e.target.name]: e.target.value });
  };

  const handleNumChange = e => {
    setUpdateService({
      ...updateService,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  return (
    <div>
      <h1>Update your service information</h1>
      <Card>
        <form>
          <label htmlFor="Name">Service name</label>
          <br />
          <input
            type="text"
            name="name"
            value={updateService.name}
            placeholder={updateService.name}
            onChange={handleChange}
          ></input>
          <br />
          <label htmlFor="Description">Description</label>
          <br />
          <textarea
            type="text"
            name="description"
            value={updateService.description}
            placeholder={updateService.description}
            onChange={handleChange}
            rows="8"
            cols="30"
          ></textarea>
          <br />
          <label htmlFor="Price">Price</label>
          <br />
          <input
            type="number"
            name="cost"
            placeholder={updateService.cost}
            value={updateService.cost}
            onChange={handleNumChange}
          ></input>
          <br />
        </form>
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={() => changeView(2)}>Cancel</Button>
      </Card>
    </div>
  );
};

export default ServiceUpdateForm;
