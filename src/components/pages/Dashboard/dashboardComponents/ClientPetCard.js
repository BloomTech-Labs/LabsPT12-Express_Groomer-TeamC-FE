import React from 'react';
import { Card } from 'antd';

const ClientPetCard = ({ animals }) => {
  return (
    <Card>
      {animals.map(animal => {
        return (
          <Card key={animal.id} type="inner" title={animal.name}>
            <p>Type: {animal.animal_type}</p>
            <p>Breed: {animal.breed}</p>
            <p>Weight: {animal.weight} lbs.</p>
          </Card>
        );
      })}
    </Card>
  );
};

export default ClientPetCard;
