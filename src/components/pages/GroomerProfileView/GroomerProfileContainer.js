import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from '../../common';
import GroomerProfileCard from './GroomerProfileCard';

import SearchContext from '../../../state/search/searchContext';

const GroomerProfileContainer = () => {
  const searchContext = useContext(SearchContext);
  const { groomer, getGroomerProfile, clearGroomer } = searchContext;

  let params = useParams();

  useEffect(() => {
    clearGroomer();
    getGroomerProfile(params.id);
  }, []);

  return (
    <div>
      {Object.keys(groomer).length < 1 && <Spinner />}
      {Object.keys(groomer).length > 0 && (
        <GroomerProfileCard groomer={groomer} />
      )}
    </div>
  );
};

export default GroomerProfileContainer;
