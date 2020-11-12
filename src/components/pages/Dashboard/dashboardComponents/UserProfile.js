import React, { useContext } from 'react';
import UserContext from '../../../../state/user/userContext';
import DashboardContext from '../../../../state/dashboard/dashboardContext';

import { Button, List, Card } from 'antd';

const UserProfile = () => {
  const userContext = useContext(UserContext);
  const dashboardContext = useContext(DashboardContext);
  const { userProfile } = userContext;
  const { changeView } = dashboardContext;

  const { name, email, address, city, state, zipcode, country } = userProfile;

  const data = [
    {
      title: 'Name',
      description: name,
    },
    {
      title: 'Email',
      description: email,
    },
    {
      title: 'Address',
      description: address,
    },
    {
      title: 'City',
      description: city,
    },
    {
      title: 'State',
      description: state,
    },
    {
      title: 'Zipcode',
      description: zipcode,
    },
    {
      title: 'Country',
      description: country,
    },
  ];

  return (
    <div>
      <h1>Your profile</h1>
      <Button type="primary" onClick={() => changeView(5)}>
        Update profile
      </Button>
      <Card>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={<p>{item.title}</p>}
                description={<p>{item.description}</p>}
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default UserProfile;
