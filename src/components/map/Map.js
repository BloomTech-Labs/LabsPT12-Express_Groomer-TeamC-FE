import React, { useState, useEffect } from 'react';
import MapBoxGeocoder from '@mapbox/mapbox-gl-geocoder';
import mapBoxGl from 'mapbox-gl/dist/mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const Map = ({ options, geocoderOptions, children }) => {
  const [map, setMap] = useState(undefined);
  const [geocoder, setGeocoder] = useState(undefined);

  /**  mapbox API token */
  mapBoxGl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

  /** initialize Map box */
  useEffect(() => {
    const mapBox = new mapBoxGl.Map(options);
    setMap(mapBox);
  }, [options]);

  /** initialize geocoder */
  useEffect(() => {
    if (geocoderOptions) {
      const mGeocoder = new MapBoxGeocoder({
        accessToken: mapBoxGl.accessToken,
        mapboxgl: mapBoxGl,
        ...geocoderOptions,
      });
      setGeocoder(mGeocoder);
      if (map) map.on('load', () => map.addControl(mGeocoder, 'top-right'));
    }
  }, [geocoderOptions, map]);

  return <div className="map-elements">{children(map, geocoder)}</div>;
};
export default Map;
