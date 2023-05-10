"use client";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
  GeoJSON
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { initMapPosition } from "../constants/map";
import { styled } from "styled-components";
import { colonies } from "../data/colonies";
import { Loader } from "./Loader";

const Map = ({ userLocation, coloniesEnable }) => {
  return (
    <MapContainerSyled
      center={initMapPosition}
      zoom={5}
      placeholder={<Loader/>}
    >
      <TileLayer
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
        attribution='Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <MapEvents userLocation={userLocation} />
      {coloniesEnable && <GeoJSON data={colonies} />}
      


    </MapContainerSyled>
  );
};



const MapEvents = ({ userLocation }) => {
  const map = useMapEvent("click", (e) => {
    console;
  });

  useEffect(() => {
    if (userLocation) {
      map.flyTo(userLocation, 12);
    }
  }, []);

  return <></>;
};

const MapContainerSyled = styled(MapContainer)`
width: 100%;
height: 85vh;
border-radius: 20px;
overflow: hidden;
`

export default Map;
