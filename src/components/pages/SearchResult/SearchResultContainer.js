import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GroomerCard from './GroomerCard';
import Map from '../../map/Map';
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        margin: '50px 20px',
      }}
    >
      <div>
        {Object.keys(groomers) < 1 ? (
          <Spinner />
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              margin: '0px 50px',
            }}
          >
            {groomers.map(item => {
              return <GroomerCard key={item.id} groomer={item} />;
            })}
          </div>
        )}
      </div>
      <div>
        <Map groomers={groomers} />
      </div>
    </div>
  );
};
export default SearchResultContainer;
