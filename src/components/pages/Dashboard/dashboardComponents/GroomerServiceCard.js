import React from 'react';
import { Card } from 'antd';

const GroomerServiceCard = ({ services }) => {
  return (
    <Card>
      {services.map(service => {
        return (
          <Card key={service.id} type="inner" title={service.name}>
            <p>Description: {service.description}</p>
            <p>Service hours: {service.service_hours}</p>
            <p>Price: {service.cost}</p>
          </Card>
        );
      })}
    </Card>
  );
};

export default GroomerServiceCard;
