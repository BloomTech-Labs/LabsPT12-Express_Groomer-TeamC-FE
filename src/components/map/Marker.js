import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

// create markers
const Marker = ({ map, place, onClick, children }) => {
  const markerRef = React.createRef();
  useEffect(() => {
    if (map) {
      map.on('load', () => {
        const markerEl = markerRef.current;
        new mapboxgl.Marker(markerEl, { offset: [0, -23] })
          .setLngLat(place.coordinate)
          .addTo(map);
      });
    }
  }, [place, map]);

  return (
    <div
      id={place.id}
      ref={markerRef}
      onClick={() => onClick(place)}
      className="marker"
    >
      {children}
    </div>
  );
};
export default Marker;
