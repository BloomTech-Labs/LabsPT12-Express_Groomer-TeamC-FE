import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ClientContext from '../../../state/client/clientContext';
import { parseQuery } from './../../../utils/parse-query';
import axios from 'axios';

function SearchResultContainer(props) {
  const clientContext = useContext(ClientContext);
  const [result, setResult] = useState([]);
  const [users, setUsers] = useState([]);
  const location = useLocation();

  const getUsers = async filters => {
    const users = (
      await axios.get(`https://jsonplaceholder.typicode.com/users`)
    ).data;
    setUsers(users);
    const res = users.filter(
      groomer => groomer.id === parseInt(filters.groomerId)
    );
    setResult(res);
  };

  useEffect(() => {
    const filters = parseQuery(location.search);
    getUsers(filters);
  }, [location]);

  return (
    <div>
      <h1>View Groomer Profile</h1>
      {result.map(user => (
        <h3 key={user.id}>
          {user.name}
          <p>{user.city}</p>
          <p>{user.phone}</p>
        </h3>
      ))}
    </div>
  );
}
export default SearchResultContainer;
