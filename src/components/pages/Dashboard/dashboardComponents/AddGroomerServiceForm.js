import React, { useContext, useState } from 'react';
import UserContext from '../../../../state/user/userContext';
import DashboardContext from '../../../../state/dashboard/dashboardContext';
import { Card, Button } from 'antd';

const AddGroomerServiceForm = () => {
  const userContext = useContext(UserContext);
  const dashboardContext = useContext(DashboardContext);
  const { groomerProfile, addNewService } = userContext;
  const { changeView } = dashboardContext;

  const [newService, setNewService] = useState({
    name: '',
    description: '',
    cost: 0,
  });

  const handleSubmit = e => {
    e.preventDefault();
    addNewService(newService, groomerProfile.profile_id);
    changeView(2);
  };

  const handleChange = e => {
    setNewService({ ...newService, [e.target.name]: e.target.value });
  };

  const handleNumChange = e => {
    setNewService({ ...newService, [e.target.name]: parseInt(e.target.value) });
  };

  return (
    <div>
      <h1>Create a new service</h1>
      <Card>
        <form>
          <label htmlFor="Name">Service name</label>
          <br />
          <input
            type="text"
            name="name"
            value={newService.name}
            onChange={handleChange}
          ></input>
          <br />
          <br />
          <label htmlFor="Description">Description</label>
          <br />
          <textarea
            type="text"
            name="description"
            value={newService.description}
            onChange={handleChange}
            rows="8"
            cols="30"
          ></textarea>
          <br />
          <br />
          <label htmlFor="Price">Price</label>
          <br />
          <input
            type="number"
            name="cost"
            value={newService.cost}
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

export default AddGroomerServiceForm;
