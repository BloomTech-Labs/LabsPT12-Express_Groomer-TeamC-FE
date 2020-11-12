import React, { useState, useEffect, useContext } from 'react';
import DashboardContext from '../../../../state/dashboard/dashboardContext';
import UserContext from '../../../../state/user/userContext';
import { Card, Button } from 'antd';

const ProfileUpdateForm = () => {
  const userContext = useContext(UserContext);
  const dashboardContext = useContext(DashboardContext);

  const { userProfile, updateProfile } = userContext;
  const { changeView } = dashboardContext;

  const [update, setUpdate] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    country: '',
    phone: '',
  });

  useEffect(() => {
    if (Object.keys(userProfile).length > 0) {
      setUpdate(userProfile);
    } else {
      setUpdate({
        name: '',
        address: '',
        city: '',
        state: '',
        zip_code: '',
        country: '',
        phone: '',
      });
    }
  }, [userProfile]);

  const handleChange = e => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateProfile(update);
    changeView(1);
  };

  return (
    <div>
      <h1>Update your profile</h1>
      <Card>
        <form>
          <label htmlFor="Name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={update.name}
            onChange={handleChange}
          ></input>
          <br />
          <br />
          <label htmlFor="Address">Address</label>
          <br />
          <input
            type="text"
            name="address"
            value={update.address}
            onChange={handleChange}
          ></input>
          <br />
          <br />
          <label htmlFor="City">City</label>
          <br />
          <input
            type="text"
            name="city"
            value={update.city}
            onChange={handleChange}
          ></input>
          <br />
          <label htmlFor="State">State</label>
          <br />
          <br />
          <input
            type="text"
            name="state"
            value={update.state}
            onChange={handleChange}
          ></input>
          <br />
          <br />
          <label htmlFor="Zipcode">Zipcode</label>
          <br />
          <input
            type="text"
            name="zip_code"
            value={update.zip_code}
            onChange={handleChange}
          ></input>
          <br />
          <br />
          <label htmlFor="Country">Country</label>
          <br />
          <input
            type="text"
            name="country"
            value={update.country}
            onChange={handleChange}
          ></input>
          <br />
          <br />
          <label htmlFor="Phone">Phone</label>
          <br />
          <input
            type="text"
            name="phone"
            value={update.phone}
            onChange={handleChange}
          ></input>
          <br />
          <br />

          <div>
            <Button onClick={handleSubmit}>Update</Button>
            <Button onClick={() => changeView(1)}>Cancel</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ProfileUpdateForm;
