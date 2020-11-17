import React, { useEffect, useState } from 'react';

// create a listing for groomers
const MapPlaceList = ({
  placeList,
  map,
  geocoder,
  geocoderHandler,
  Item = () => <></>,
}) => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    if (map) {
      setPlaces(placeList);

      if (geocoder)
        geocoder.on('result', e =>
          geocoderHandler(e.result, setPlaces, places)
        );
    }
  }, [placeList, geocoder]);

  return (
    <div className="map-place">
      <div className="map-place-list-heading">
        <h3>Our Groomers</h3>
      </div>

      <div className="map-place-list">
        {places.map(place => (
          <Item key={place.id} map={map} geocoder={geocoder} place={place} />
        ))}
      </div>
    </div>
  );
};

export default MapPlaceList;
