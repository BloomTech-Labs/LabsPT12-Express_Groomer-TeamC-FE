import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GroomerCard from './GroomerCard';
import SearchContext from '../../../state/search/searchContext';
import { Spinner } from '../../common/';

const SearchResultContainer = () => {
  const searchContext = useContext(SearchContext);

  const { groomers, searchGroomersBy } = searchContext;

  let params = useParams();

  useEffect(() => {
    searchGroomersBy(params.city);
  }, []);

  return (
    <div>
      {Object.keys(groomers) < 1 ? (
        <Spinner />
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            margin: '30px 50px',
          }}
        >
          {groomers.map(item => {
            return <GroomerCard key={item.id} groomer={item} />;
          })}
        </div>
      )}
    </div>
  );
};
export default SearchResultContainer;
