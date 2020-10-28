import React from 'react';
import { useHistory } from 'react-router-dom';
import { Descriptions, Image, Button } from 'antd';

const GroomerProfileCard = props => {
  const { name, email, city, state, avatarUrl } = props.groomer;
  let history = useHistory();
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '30px 0',
        }}
      >
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
          <div
            style={{
              width: '300px',
              backgroundColor: 'light-gray',
              border: '1px solid gray',
              borderRadius: '5px',
              padding: '10px',
              margin: '10px 0',
            }}
          >
            <Descriptions layout="vertical" column={1}>
              <Descriptions.Item label="Name">{name}</Descriptions.Item>
              <Descriptions.Item label="Email">{email}</Descriptions.Item>
              <Descriptions.Item label="Location">{`${city}, ${state}`}</Descriptions.Item>
              <Descriptions.Item label="Email">{email}</Descriptions.Item>
            </Descriptions>
          </div>

          <Button
            onClick={() => history.goBack()}
            style={{
              backgroundColor: '#00c756',
              width: '300px',
            }}
          >
            Back to search results
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GroomerProfileCard;
