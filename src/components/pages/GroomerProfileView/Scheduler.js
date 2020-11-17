import React, { useState } from 'react';
import SelectionButton from './ServiceButton';
import { DatePicker, Row, Col, Typography, Button, Card } from 'antd';
import './scheduler.scss';
import moment from 'moment';

const { Title } = Typography;

const Scheduler = ({ services, client, groomer, createNewAppt }) => {
  const [newAppt, setNewAppt] = useState({
    client_id: client.id,
    groomer_id: groomer.profile_id,
    animal_id: '',
    appointment_date: '',
    location: `${groomer.city}, ${groomer.state}`,
    services: [],
  });

  const [apptView, setApptView] = useState({
    proDate: '',
    proServices: [],
    proPet: '',
  });

  const handleDateSet = (v, ds) => {
    setApptView({
      ...apptView,
      proDate: ds,
    });

    setNewAppt({
      ...newAppt,
      appointment_date: moment(ds).format(),
    });
  };

  const handleServiceSelect = (servId, name) => {
    const curr_services = newAppt.services;
    curr_services.push(servId);

    setNewAppt({
      ...newAppt,
      services: curr_services,
    });

    const view_services = apptView.proServices;
    view_services.push(name);
    setApptView({
      ...apptView,
      proServices: view_services,
    });
  };

  const handlePetSelect = (animalId, name) => {
    setNewAppt({
      ...newAppt,
      animal_id: animalId,
    });

    setApptView({
      ...apptView,
      proPet: name,
    });
  };

  const handleSubmit = () => {
    createNewAppt(newAppt);
  };

  return (
    <div className="schedule-ctn">
      <div className="schedule-title">
        <Title level={3}>Schedule your appointment</Title>
      </div>
      <Row className="schedule-row1">
        <Col className="schedule-col" span={8}>
          <div>
            <Title level={5}>Pick a time</Title>
          </div>
          <div>
            <DatePicker
              showTime
              onChange={(value, dateString) => handleDateSet(value, dateString)}
            />
          </div>
        </Col>
        <Col className="schedule-col" span={8}>
          <div>
            <Title level={5}>Select service(s)</Title>
          </div>
          <Card>
            {services.map(service => {
              const output = `${service.name}....$${service.cost}`;
              return (
                <SelectionButton
                  key={service.id}
                  id={service.id}
                  selection={output}
                  handleSelect={handleServiceSelect}
                />
              );
            })}
          </Card>
        </Col>
        <Col className="schedule-col" span={8}>
          <div>
            <Title level={5}>Select a pet</Title>
          </div>
          <Card>
            {client.animals.map(animal => {
              const output = animal.name;
              return (
                <SelectionButton
                  key={animal.id}
                  id={animal.id}
                  selection={output}
                  handleSelect={handlePetSelect}
                />
              );
            })}
          </Card>
        </Col>
      </Row>
      <Row>
        <Card title="Your Appointment">
          <h5>Date/time</h5>
          <p>{apptView.proDate}</p>
          <h5>Services</h5>
          {apptView.proServices.map(service => {
            return <p>{service}</p>;
          })}
          <h5>Pet</h5>
          <p>{apptView.proPet}</p>
        </Card>
      </Row>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default Scheduler;
