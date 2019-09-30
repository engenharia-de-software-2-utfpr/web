import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import { getOccurrences } from "../../services/occurrences";
import styles from "./map.module.scss";
import respectiveMarker from "../../helpers/occurrenceMarkers";


function MapRender() {
  const [position] = useState({
    lat: -24.046329,
    lng: -52.37802,
    zoom: 14
  });

  const getApprovedOccurences = () => {
    return getOccurrences('approved').then(response => setOccurrences(response.data.data));
  } 

  useEffect(() => {
    getApprovedOccurences(); 
  }, []);

  const [occurrences, setOccurrences] = useState([]);

  const renderMarkers = () => {
    return occurrences.map(occurrence => {
      const position = [occurrence.latitude, occurrence.longitude]; 
      return <Marker position={position} icon={respectiveMarker(occurrence.category_id)}></Marker>
    });
  };

  return (
    <Map center={position} zoom={position.zoom} className={styles.map}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {renderMarkers()}
    </Map>
  );
}

export default MapRender;
