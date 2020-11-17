import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from '../../common';
import GroomerProfileCard from './GroomerProfileCard';

import SearchContext from '../../../state/search/searchContext';
import UserContext from '../../../state/user/userContext';

const GroomerProfileContainer = () => {
  const searchContext = useContext(SearchContext);
  const userContext = useContext(UserContext);

  const { groomer, getGroomerProfile, clearGroomer } = searchContext;
  const { clientProfile, createNewAppt } = userContext;

  let params = useParams();

  useEffect(() => {
    clearGroomer();
    getGroomerProfile(params.id);
  }, []);

  return (
    <div>
      {Object.keys(groomer).length < 1 && <Spinner />}
      {Object.keys(groomer).length > 0 && (
        <GroomerProfileCard
          createNewAppt={createNewAppt}
          client={clientProfile}
          groomer={groomer}
        />
      )}
    </div>
  );
};

export default GroomerProfileContainer;
