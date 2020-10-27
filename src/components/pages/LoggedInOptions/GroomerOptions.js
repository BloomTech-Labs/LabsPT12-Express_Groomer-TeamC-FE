import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';

const GroomerOptions = () => {
  let history = useHistory();
  console.log(history);

  return (
    <div>
      <Button onClick={() => history.push('/client-dash')}>
        Manage your groomer account
      </Button>
    </div>
  );
};

export default GroomerOptions;
