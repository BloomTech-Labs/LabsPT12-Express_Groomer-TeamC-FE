import React, { useContext, useState, useEffect } from 'react';
import { Card, Button } from 'antd';
import DashboardContext from '../../../../state/dashboard/dashboardContext';
import UserContext from '../../../../state/user/userContext';

const PetUpdateForm = () => {
  const dashboardContext = useContext(DashboardContext);
  const userContext = useContext(UserContext);

  const [petUpdate, setPetUpdate] = useState({
    id: '',
    owner_id: '',
    name: '',
    animal_type: '',
    breed: '',
    comment: '',
    weight: '',
  });

  const { petToUpdate, changeView } = dashboardContext;

  const { updatePet } = userContext;

  const { owner_id, name, animal_type, breed, comment, weight } = petUpdate;

  useEffect(() => {
    if (Object.keys(petToUpdate).length > 0) {
      setPetUpdate({
        id: petToUpdate.id,
        owner_id: petToUpdate.owner_id,
        name: petToUpdate.name,
        animal_type: petToUpdate.animal_type,
        breed: petToUpdate.breed,
        comment: petToUpdate.comment,
        weight: petToUpdate.weight,
      });
    }
  }, [petToUpdate]);

  const handleSubmit = e => {
    e.preventDefault();
    updatePet(petUpdate, owner_id);
    changeView(2);
  };

  const handleChange = e => {
    setPetUpdate({ ...petUpdate, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Update your pet's information</h1>
      <Card>
        <form>
          <label htmlFor="Name">Pet name</label>
          <br />
          <input
            type="text"
            name="name"
            value={name}
            placeholder={name}
            onChange={handleChange}
          ></input>
          <br />
          <label htmlFor="Type">Animal Type</label>
          <br />
          <select name="animal_type" onChange={handleChange}>
            <option value={animal_type} disabled selected>
              {animal_type}
            </option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
          </select>
          <br />
          <label htmlFor="Breed">Breed</label>
          <br />
          <input
            type="text"
            name="breed"
            value={breed}
            placeholder={breed}
            onChange={handleChange}
          ></input>
          <br />
          <label htmlFor="Type">Weight</label>
          <br />
          <select name="weight" onChange={handleChange}>
            <option value={weight} disabled selected>
              {weight}
            </option>
            <option value="Small: 0-15 lbs">Small: 0-15 lbs</option>
            <option value="Medium: 16-40 lbs">Medium: 16-40 lbs</option>
            <option value="Large: 41-99 lbs">Large: 41-99 lbs</option>
            <option value="Giant: >100 lbs">Giant: 100+ lbs</option>
          </select>
          <br />
          <label htmlFor="Comment">What should we know about your pet?</label>
          <br />
          <textarea
            type="text"
            placeholder={comment}
            name="comment"
            value={comment ? comment : ''}
            onChange={handleChange}
            rows="8"
            cols="30"
          ></textarea>
          <br />
          <div>
            <Button onClick={handleSubmit}>Update</Button>
            <Button onClick={() => changeView(2)}>Cancel</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default PetUpdateForm;
