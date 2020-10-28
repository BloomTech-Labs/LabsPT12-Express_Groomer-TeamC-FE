import React from 'react';
import { Card } from 'antd';
import { useHistory } from 'react-router-dom';

const { Meta } = Card;

const GroomerCard = props => {
  const { name, city, state, avatarUrl, profile_id } = props.groomer;

  let history = useHistory();

  return (
    <div className="groomerCard-ctn" style={{ margin: '10px 20px' }}>
      <Card
        style={{ width: 200 }}
        onClick={() => history.push(`/groomer-profile/${profile_id}`)}
        cover={<img alt="groomer avatar" src={avatarUrl} />}
      >
        <Meta
          title={`${name}: ${city}, ${state}`}
          description="Click to view profile"
        />
      </Card>
    </div>
  );
};

export default GroomerCard;
