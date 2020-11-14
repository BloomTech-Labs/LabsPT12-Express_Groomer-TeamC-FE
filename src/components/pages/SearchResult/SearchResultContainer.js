import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MapElements from '../../map/MapElements';
import SearchContext from '../../../state/search/searchContext';

const SearchResultContainer = () => {
  const searchContext = useContext(SearchContext);

  const { groomers, searchGroomersBy } = searchContext;

  let params = useParams();

  useEffect(() => {
    searchGroomersBy(params.city);
  }, []);

  return (
    <div>
      <MapElements groomers={groomers} />
    </div>
  );
};
export default SearchResultContainer;
