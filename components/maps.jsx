import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Maps(props) {
  // const dataLatitude = props.latitude ? props.latitude : -6.905977;
  // const dataLongitude = props.longitude ? props.longitude : 107.613144;

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: props.latitude,
    longitude: props.longitude,
    zoom: 11,
  });

  useEffect(() => {
    setViewport({
      width: "100%",
      height: "100%",
      latitude: props.latitude,
      longitude: props.longitude,
      zoom: 10,
    });
  }, [props.latitude]);

  const token =
    "pk.eyJ1IjoiYWttYWxheXMiLCJhIjoiY2wwM3dxOWpzMWkwdDNpbHNoc3ViNGdvMCJ9.dK_FtvTA0JCkQ1TM3BYBtA";
  console.log("cek latitude", props.latitude);
  console.log("cek latitude", props.longitude);
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/akmalays/cl03wxb9p000w15qmc0va7d5x"
      mapboxAccessToken={token}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
    ></ReactMapGL>
  );
}

export default Maps;
