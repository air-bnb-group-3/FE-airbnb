import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Maps() {
  const center = getCenter([
    { latitude: -6.50846200002, longitude: 86.773610333 },
    { latitude: -6.8850428, longitude: 87.61157815 },
    { latitude: -6.90556, longitude: 87.60531 },
  ]);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: -6.905977,
    longitude: 107.613144,
    zoom: 11,
  });
  const token =
    "pk.eyJ1IjoiYWttYWxheXMiLCJhIjoiY2wwM3dxOWpzMWkwdDNpbHNoc3ViNGdvMCJ9.dK_FtvTA0JCkQ1TM3BYBtA";

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/akmalays/cl03wxb9p000w15qmc0va7d5x"
      mapboxAccessToken={token}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
    >
      <Marker
        longitude={center.latitude}
        latitude={center.longitude}
        offsetLeft={2}
        offsetTop={-20}
      >
        <p className="cursor-pointer text-3xl animate-bounce"> B </p>
      </Marker>
    </ReactMapGL>
  );
}

export default Maps;
