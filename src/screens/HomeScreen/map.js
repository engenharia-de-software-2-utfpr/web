import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import L from 'leaflet';
import styles from "./map.module.scss";
import { getOccurrencies } from "../../services/occurrencies";

const dengue = new L.Icon({
  iconUrl: require('../../assets/icons/dengue.jpg'),
  iconRetinaUrl: require('../../assets/icons/dengue.jpg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 25]
})

function MapRender() {
  const [position] = useState({
    lat: -24.046329,
    lng: -52.37802,
    zoom: 14
  });

  const getApprovedOccurencies = () => {
    return getOccurrencies('approved').then(response => setOccurrencies(response.data.data));
  } 

  useEffect(() => {
    getApprovedOccurencies(); 
  }, []);

  const [occurrencies, setOccurrencies] = useState([]);

  const renderMarkers = () => {
    return occurrencies.map(occurrence => {
      const position = [occurrence.latitude, occurrence.longitude]; 
      return <Marker position={position} icon={dengue}></Marker>
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
