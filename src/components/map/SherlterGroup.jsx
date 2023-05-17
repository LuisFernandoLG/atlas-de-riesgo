import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
import shelterImg from "../../../app/shelter.png"

let shelterIcon = L.icon({
  iconUrl: shelterImg.src,
  iconRetinaUrl: shelterImg.src,
  // iconAnchor: [5, 55],
  // popupAnchor: [10, -44],
  iconSize: [25, 25],
});


export const SherlterGroup = ({ shelters }) => {
  return (
    <>
      {shelters.map(({ name, latitude, longitude }) => (
        <Marker
          key={`${name}`}
          icon={shelterIcon}
          position={[longitude, latitude]}
        >
          <Popup>{name}</Popup>
        </Marker>
      ))}
    </>
  );
};
