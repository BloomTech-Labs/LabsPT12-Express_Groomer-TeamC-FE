import React from 'react';
import { Card, Row, Col, Typography } from 'antd';

import './serviceCard.scss';

const { Title } = Typography;

const ServiceCard = ({ services }) => {
  return (
    <div className="services-ctn">
      <div className="services-title">
        <Title level={3}>Services</Title>
      </div>
      <div className="card-ctn">
        <div className="cards">
          {services.map(service => {
            return (
              <Card
                key={service.serviceId}
                title={service.name}
                className="service-card"
              >
                <Row className="service-details">
                  <Col className="card-col1" id="serv-description" span={16}>
                    <p id="card-desc">{service.description}</p>
                  </Col>
                  <Col className="card-col2" id="serv-cost" span={8}>
                    <Title id="card-cost" level={4}>
                      ${service.cost}
                    </Title>
                  </Col>
                </Row>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
