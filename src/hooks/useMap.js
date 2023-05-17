import { useEffect, useState } from "react";

export const useMap = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    getCurrentPosition().then((position) => setUserLocation(position));
  }, []);

  const getCurrentPosition = () =>
    new Promise((resolve, reject) => {
      try {
        navigator.geolocation.getCurrentPosition(function (position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
          const { latitude, longitude } = position.coords;
          resolve(position);
        });
      } catch (error) {
        alert("error al obtener la ubicación");
        reject(null);
      }
    });

  return { userLocation };
};
