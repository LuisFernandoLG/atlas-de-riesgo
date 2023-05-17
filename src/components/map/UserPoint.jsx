import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
import shelterImg from "../../../app/user.png";

let userIcon = L.icon({
  iconUrl: shelterImg.src,
  iconRetinaUrl: shelterImg.src,
  // iconAnchor: [5, 55],
  // popupAnchor: [10, -44],
  iconSize: [40, 40],
});

export const UserPoint = ({ userLocation }) => {
  console.log({userLocation})
  if(!userLocation) return null
  
  return (
    <Marker
      icon={userIcon}
      position={[userLocation.coords.latitude, userLocation.coords.longitude]}
    >
      
    </Marker>
  );
};
