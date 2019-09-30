import React, { useState } from "react";
import { Map, TileLayer } from "react-leaflet";
import styles from "./map.module.scss";

function MapRender() {
  const [position] = useState({
    lat: -24.046329,
    lng: -52.37802,
    zoom: 14
  });

  return (
    <Map center={position} zoom={position.zoom} className={styles.map}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </Map>
  );
}

export default MapRender;
