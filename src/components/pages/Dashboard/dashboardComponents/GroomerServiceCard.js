import React, { useContext } from 'react';
import { Card, Button, Popconfirm } from 'antd';
import DashboardContext from '../../../../state/dashboard/dashboardContext';

const GroomerServiceCard = ({ services, deleteService, groomerProfile }) => {
  const dashboardContext = useContext(DashboardContext);

  const { changeView, setServiceToUpdate } = dashboardContext;

  const handleUpdateClick = serVice => {
    setServiceToUpdate(serVice);
    changeView(7);
  };

  return (
    <div>
      <Card>
        {services.map(service => {
          return (
            <Card key={service.id} type="inner" title={service.name}>
              <p>Description: {service.description}</p>
              <p>Service hours: {service.service_hours}</p>
              <p>Price: ${service.cost}</p>
              <Popconfirm
                placement="bottom"
                title="Are you sure you want to delete this service?"
                onConfirm={() =>
                  deleteService(service.serviceId, groomerProfile.profile_id)
                }
                okText="I want to delete this service"
                cancelText="I want to keep this service"
              >
                <Button>Remove Service</Button>
              </Popconfirm>
              <Button onClick={() => handleUpdateClick(service)}>
                Update Service
              </Button>
            </Card>
          );
        })}
        <br />
      </Card>
    </div>
  );
};

export default GroomerServiceCard;
