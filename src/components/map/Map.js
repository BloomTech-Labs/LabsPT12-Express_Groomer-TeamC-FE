import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import logo from '../../images/smallest-logo.png';

const Map = props => {
  const [viewport, setViewport] = useState({
    latitude: 40.7539,
    longitude: -95,
    width: '47vw',
    height: '112vh',
    zoom: 3,
  });

  // selected groomer on map
  const [selectedGroomer, setSelectedGroomer] = useState(null);

  const history = useHistory();

  // mapbox API token
  const token = process.env.REACT_APP_MAPBOX_TOKEN;

  // use hook to cause ESC to close popup
  useEffect(() => {
    const listener = event => {
      if (event.key === 'Escape') {
        setSelectedGroomer(null);
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={token}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {props.groomers.map(item => (
          <Marker latitude={item.latitude} longitude={item.longitude}>
            {/* display groomer name on mouseover and navigate to groomer profile on click */}
            <button
              onClick={() =>
                history.push(`/groomer-profile/${item.profile_id}`)
              }
              onMouseOver={e => {
                e.preventDefault();
                setSelectedGroomer(item);
              }}
            >
              <img src={logo} />
            </button>
          </Marker>
        ))}
        {selectedGroomer ? (
          <Popup
            latitude={selectedGroomer.latitude}
            longitude={selectedGroomer.longitude}
            onClose={() => {
              setSelectedGroomer(null);
            }}
          >
            <div>
              <h2>{selectedGroomer.name}</h2>
              <h6>click Escape to close</h6>
              <h6>click icon to view profile</h6>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
};
export default Map;
