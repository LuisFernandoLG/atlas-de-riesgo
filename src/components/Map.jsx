"use client";

import { MapContainer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useMemo, useState } from "react";
import { initMapPosition } from "../constants/map";
import { styled } from "styled-components";
import { CustomTitleLayer } from "./map/CustomTitleLayer";
import { ColonyGroup } from "./map/ColonyGroup";
import { UserPoint } from "./map/UserPoint";
import { SherlterGroup } from "./map/SherlterGroup";
import { MapControlButtons } from "./map/MapControlButtons";
import { MapPanel } from "./map/MapPanel";
import { shelters } from "../data/shelters";
import { useInfoMapRadio } from "../hooks/useInfoMapRadio";

const InternalEventsMap = ({ mapRef, userLocation }) => {
  useEffect(() => {
    mapRef.flyTo(
      [userLocation.coords.latitude, userLocation.coords.longitude],
      14
    );
  }, [mapRef]);

  return <></>;
};

const Map = ({ userLocation }) => {
  const [mapRef, setMapRef] = useState(null);
  
  const {
    toggleColonySwitch,
    isColonySwitchOn,
    isShelterSwitchOn,
    toggleShelterSwtich,
  } = useInfoMapRadio();



  const displayMap = useMemo(
    () => (
      <>
        <MapContainerSyled
          zoomControl={false}
          center={initMapPosition}
          zoom={15}
          ref={setMapRef}
        >
          <CustomTitleLayer />
          <MapPanel
            toggleColonySwitch={toggleColonySwitch}
            isColonySwitchOn={isColonySwitchOn}
            toggleShelterSwtich={toggleShelterSwtich}
            isShelterSwitchOn={isShelterSwitchOn}
          />
          <MapControlButtons userLocation={userLocation} />
          <UserPoint userLocation={userLocation} />
          {isShelterSwitchOn && <SherlterGroup shelters={shelters} />}
          {isColonySwitchOn && <ColonyGroup />}
          <ZoomControl position="topright" />
        </MapContainerSyled>
      </>
    ),
    [isShelterSwitchOn, isColonySwitchOn]
  );

  return (
    <>
      {mapRef ? (
        <InternalEventsMap mapRef={mapRef} userLocation={userLocation} />
      ) : null}
      {displayMap}
    </>
  );
};

const MapContainerSyled = styled(MapContainer)`
  width: 100%;
  height: 600px;
  overflow: hidden;
`;

export default Map;
