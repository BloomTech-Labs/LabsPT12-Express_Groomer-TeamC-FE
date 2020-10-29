import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';

const cities = [
  { label: 'New York', value: 0 },
  { label: 'San Francisco', value: 1 },
];

const ClientOptions = props => {
  const [selected, setSelected] = useState(0);
  const history = useHistory();

  const handleChange = e => {
    setSelected(e.value);
  };

  const handleClick = e => {
    history.push(`/search-result-page/${cities[selected]['label']}`);
  };

  return (
    <form className="search-form">
      <Select
        className="select-form"
        style={{ color: 'black' }}
        placeholder="Select your area"
        options={cities}
        onChange={handleChange}
      />

      <div className="search-btn-ctn">
        <button onClick={handleClick}>Search for groomers</button>
      </div>
    </form>
  );
};
export default ClientOptions;
