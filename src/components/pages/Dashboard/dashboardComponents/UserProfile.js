import React, { useContext } from 'react';
import UserContext from '../../../../state/user/userContext';
import { useHistory } from 'react-router-dom';

import { Button, List } from 'antd';

const UserProfile = () => {
  const userContext = useContext(UserContext);
  const { userProfile } = userContext;

  const history = useHistory();

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
      <Button type="primary" onClick={() => history.push(`/update-profile`)}>
        Update profile
      </Button>
    </div>
  );
};

export default UserProfile;
