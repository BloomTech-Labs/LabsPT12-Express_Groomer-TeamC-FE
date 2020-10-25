import ClientContext from '../../../state/client/clientContext';
import React, { useState, useContext } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import RenderSearcPage from './RenderSearchPage';

const SearchContainer = props => {
  const [selectedGroomer, setSelectedGroomer] = useState(0);
  const clientContext = useContext(ClientContext);

  const history = useHistory();

  const handleChange = event => {
    setSelectedGroomer(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.searchGroomers();
    history.push(`/search-result-page?groomerId=${selectedGroomer}`);
  };

  return (
    <form className="form" placeholder="select">
      <select
        className="form-select"
        style={{ color: 'black' }}
        value={selectedGroomer}
        onChange={handleChange}
      >
        <option value="">Select</option>
        {clientContext.groomers.map((groomer, index) => {
          return (
            <option key={index} value={groomer.id}>
              {groomer.name}
            </option>
          );
        })}
      </select>
      <div>
        <Button
          size="large"
          shape="round"
          className="search-btn"
          type="submit"
          onClick={handleSubmit}
        >
          Find the perfect groomer for your pet!
        </Button>
      </div>
    </form>
  );
};
export default SearchContainer;
