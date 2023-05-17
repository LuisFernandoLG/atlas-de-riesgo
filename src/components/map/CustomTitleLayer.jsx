import { TileLayer } from "react-leaflet";

export const CustomTitleLayer = () => {
  return (
    <TileLayer
      url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
    />
  );
};
