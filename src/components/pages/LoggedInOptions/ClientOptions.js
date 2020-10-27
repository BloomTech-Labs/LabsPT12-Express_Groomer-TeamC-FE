import React from 'react';
import { useHistory } from 'react-router-dom';

const ClientOptions = props => {
  const history = useHistory();

  const handleClick = e => {
    let filter = e.target.value;
    history.push(`/search-result-page/${filter}`);
  };

  return (
    <div className="search-btn-ctn">
      <button name="New York" value="New York" onClick={handleClick}>
        Search for groomers in the New York area
      </button>
      <button name="San Francisco" value="San Francisco" onClick={handleClick}>
        Search for groomers in the San Francisco area
      </button>
    </div>
  );
};
export default ClientOptions;
