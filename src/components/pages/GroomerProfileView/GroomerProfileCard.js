import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col, Typography, Rate, Divider } from 'antd';
import ServiceCard from './ServiceCard';
import Scheduler from './Scheduler';
import './groomerProfile.scss';

const { Title } = Typography;

const GroomerProfileCard = ({ groomer, client, createNewAppt }) => {
  const {
    name,
    city,
    state,
    avatarUrl,
    ratings,
    ratingCount,
    services,
  } = groomer;

  const [proView, setProView] = useState(1);

  let history = useHistory();
  return (
    <div className="profile-ctn">
      <div className="profile">
        <Row className="profile-row1">
          <Col className="profile-col" span={8}>
            <div className="img-ctn">
              <img id="avatar-img" alt="groomer" src={avatarUrl} />
            </div>
          </Col>
          <Col className="profile-col" span={10}>
            <div className="name-ctn">
              <Title id="title-name">{name}</Title>
              <Title id="title-loc" level={4}>
                {city}, {state}
              </Title>
              <div>
                <Rate disabled defaultValue={ratings} />
                <span id="rating-count">({ratingCount})</span>
              </div>
            </div>
          </Col>
          <Col className="btn-col" span={6}>
            <div className="btn-ctn">
              <Button className="profile-btn" onClick={() => history.goBack()}>
                Back to search results
              </Button>
              {proView === 1 && services.length > 0 && (
                <Button className="profile-btn" onClick={() => setProView(2)}>
                  Schedule an appointment
                </Button>
              )}
              {proView === 2 && services.length > 0 && (
                <Button className="profile-btn" onClick={() => setProView(1)}>
                  Cancel
                </Button>
              )}
            </div>
          </Col>
        </Row>
        <Divider />
        <Row className="details-row">
          {proView === 1 && services.length < 1 && (
            <Title level={4}>This groomer has not added any services yet</Title>
          )}
          {proView === 1 && services.length > 0 && (
            <ServiceCard services={services} />
          )}
          {proView === 2 && services.length > 0 && (
            <Scheduler
              createNewAppt={createNewAppt}
              groomer={groomer}
              client={client}
              services={services}
              setProView={setProView}
            />
          )}
        </Row>
      </div>
    </div>
  );
};

export default GroomerProfileCard;
