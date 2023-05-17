
import { colonies } from "@/src/data/colonies";
import {
  GeoJSON,
} from "react-leaflet";

export const ColonyGroup = () => {
  return (
    <GeoJSON data={colonies}></GeoJSON>
  )
}
