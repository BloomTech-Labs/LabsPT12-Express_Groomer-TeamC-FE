import React, { useContext } from 'react';
import { Popconfirm, Card, Button } from 'antd';
import DashboardContext from '../../../../state/dashboard/dashboardContext';
import UserContext from '../../../../state/user/userContext';

const ClientPetCard = ({ animals }) => {
  const dashboardContext = useContext(DashboardContext);
  const userContext = useContext(UserContext);

  const { setPetToUpdate, changeView } = dashboardContext;
  const { clientProfile, deletePet } = userContext;

  const handleUpdateClick = aniMal => {
    setPetToUpdate(aniMal);
    changeView(3);
  };

  const handleDeleteClick = animalId => {
    deletePet(animalId, clientProfile.id);
    changeView(2);
  };

  return (
    <Card>
      {animals.map(animal => {
        return (
          <Card key={animal.id} type="inner" title={animal.name}>
            <p>Type: {animal.animal_type}</p>
            <p>Breed: {animal.breed}</p>
            <p>Weight: {animal.weight} lbs.</p>
            <p>Comments: {animal.comment}</p>
            <div>
              <Button onClick={() => handleUpdateClick(animal)}>Update</Button>
              <Popconfirm
                placement="bottom"
                title="Are you sure you want to delete this pet?"
                onConfirm={() => handleDeleteClick(animal.id)}
                okText="I want to delete this pet"
                cancelText="I want to keep this pet"
              >
                <Button danger>Delete</Button>
              </Popconfirm>
            </div>
          </Card>
        );
      })}
    </Card>
  );
};

export default ClientPetCard;
