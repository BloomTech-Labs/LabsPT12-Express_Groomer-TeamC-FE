import React from 'react';
import { useHistory } from 'react-router-dom';

import { Layout, Descriptions, Image } from 'antd';

const RenderClientDashboard = props => {
  const { name, country, email, avatarUrl } = props.client;

  const history = useHistory();

  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Image
          width={200}
          height={200}
          src={avatarUrl}
          fallback="avatar image"
        />
        <Descriptions title="Profile" layout="vertical" column={1}>
          <Descriptions.Item label="Name">{name}</Descriptions.Item>
          <Descriptions.Item label="Email">{email}</Descriptions.Item>
          <Descriptions.Item label="Country">{country}</Descriptions.Item>
        </Descriptions>
        <button onClick={() => history.push('/update-profile')}>
          Update your profile
        </button>
      </div>
    </Layout>
  );
};

export default RenderClientDashboard;
