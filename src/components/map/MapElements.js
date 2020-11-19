import React from 'react';
import { useHistory } from 'react-router-dom';
import * as turf from '@turf/turf';
import Map from './Map';
import Marker from './Marker';
import MapPlaceList from './MapPlaceList';
import logo from '../../images/smallest-logo.png';

const mapBoxOptions = {
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-95, 40.8539], // staring position
  zoom: 3.5, // starting zoom
};

const geocoderOptions = {
  placeholder: 'Find a groomer near you',
  marker: true,
};

// add details for each groomer on the listing
// on click, navigate to groomer marker
const MapListItem = ({ map, place }) => {
  const history = useHistory();
  const handleClick = e => {
    e.preventDefault();
    map.flyTo({
      center: [place.longitude, place.latitude],
      zoom: 12,
    });
  };

  return (
    <div className="map-place-list__item">
      <h5>
        <a
          className="map-place-list__first-item"
          onClick={handleClick}
          href="/marker"
        >
          {place.name}
        </a>
        <p>
          <img
            onClick={handleClick}
            href="/marker"
            src={place.avatarUrl}
            alt={place.name}
            onClick={() => history.push(`/groomer-profile/${place.profile_id}`)}
          ></img>
        </p>
        <p>{place.phone}</p>
        <p
          className="map-place-list__last-item"
          onClick={handleClick}
          href="/marker"
        >
          {place.address}
        </p>
      </h5>
      {place.distance && <span>{place.distance}</span>}
    </div>
  );
};

const MapElements = props => {
  const parsePlace = groomer => {
    return {
      id: groomer.id,
      logo: { logo },
      coordinate: [groomer.longitude, groomer.latitude],
    };
  };

  /* listen to the geocoder result 
   calculate the distance between the address entered and each groomer */
  const handleGeocoderResult = (result, setState, oldState) => {
    const newState = [];
    for (const place of oldState) {
      const placeGeo = {
        type: 'point',
        coordinates: [place.longitude, place.latitude],
      };
      const distance = turf.distance(result.geometry, placeGeo, {
        units: 'miles',
      });
      newState.push({
        ...place,
        distance: `${parseFloat(distance).toFixed(2)} miles away`,
      });
    }
    setState(newState);
  };

  return (
    <Map options={mapBoxOptions} geocoderOptions={geocoderOptions}>
      {(map, geocoder) => (
        <>
          <MapPlaceList
            placeList={props.groomers}
            map={map}
            geocoder={geocoder}
            geocoderHandler={handleGeocoderResult}
            Item={MapListItem}
          />
          <div className="map-container" id="mapContainer"></div>
          <div className="hidden-markers">
            {props.groomers.map(groomer => (
              <Marker
                map={map}
                place={parsePlace(groomer)}
                onClick={() => console.log(groomer)}
                key={groomer.id}
              >
                <img src={logo} alt={groomer.name} />
              </Marker>
            ))}
          </div>
        </>
      )}
    </Map>
  );
};
export default MapElements;
