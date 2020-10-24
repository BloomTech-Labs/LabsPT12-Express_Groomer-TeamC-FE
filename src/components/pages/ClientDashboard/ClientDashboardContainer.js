import React from 'react';

import { Layout, Descriptions, Image } from 'antd';

const ClientDashboardContainer = props => {
  const { name, country, email, avatarUrl } = props.client;

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
      </div>
    </Layout>
  );
};

export default ClientDashboardContainer;
