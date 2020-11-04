import React, { useContext } from 'react';
import UserContext from '../../../../state/user/userContext';
import Calendar from 'react-calendar';
import { Layout, Button } from 'antd';

const { Content } = Layout;

const Appointments = () => {
  const userContext = useContext(UserContext);
  const { appointments } = userContext.groomerProfile;
  return (
    <div>
      {appointments.length < 1 ? (
        <h1>You do not have any appointments scheduled</h1>
      ) : null}
      <Content style={{ textAlign: 'center', maxWidth: 500, maxHeight: 500 }}>
        <Calendar />
        <Button>manage appointments</Button>
      </Content>
    </div>
  );
};

export default Appointments;
