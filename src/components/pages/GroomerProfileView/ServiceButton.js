import React from 'react';
import { Card } from 'antd';

const SelectionButton = ({ selection, id, handleSelect }) => {
  return (
    <div>
      <Card size="large" onClick={() => handleSelect(id, selection)}>
        {selection}
      </Card>
    </div>
  );
};

export default SelectionButton;
