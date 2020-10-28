import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const UpdateFormContainer = props => {
  const history = useHistory();

  const [update, setUpdate] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    country: '',
    phone: '',
  });

  const { name, address, city, state, zip_code, country, phone } = update;

  useEffect(() => {
    if (Object.keys(props.client).length > 0) {
      setUpdate(props.client);
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
  }, [props]);

  const handleChange = e => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit', update);
    props.updateProfile(update);
    history.goBack();
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <form
        className="profile-form"
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <p>Name</p>
        <input
          type="text"
          placeholder={name}
          name="name"
          value={update.name}
          onChange={handleChange}
        />
        <p>Address</p>
        <input
          type="text"
          placeholder={address}
          name="address"
          value={update.address}
          onChange={handleChange}
        />
        <p>City</p>
        <input
          type="text"
          placeholder={city}
          name="city"
          value={update.city}
          onChange={handleChange}
        />
        <p>State</p>
        <input
          type="text"
          placeholder={state}
          name="state"
          value={update.state}
          onChange={handleChange}
        />
        <p>Zip code</p>
        <input
          type="text"
          placeholder={zip_code}
          name="zip_code"
          value={update.zip_code}
          onChange={handleChange}
        />
        <p>Country</p>
        <input
          type="text"
          placeholder={country}
          name="country"
          value={update.country}
          onChange={handleChange}
        />
        <p>Phone</p>
        <input
          type="text"
          placeholder={phone}
          name="phone"
          value={update.phone}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateFormContainer;
