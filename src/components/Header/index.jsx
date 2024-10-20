import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [currentLocation, setCurrentLocation] = useState({
    lat: null,
    long: null,
  });

  const handleLocation = () => {
    navigator.geolocation.watchPosition(
      (position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      (error) => console.error(error),
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000,
      }
    );
  };
  console.log(currentLocation);
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-10 p-10 rounded-md w-full bg-slate-900 text-white">
        <h1 className="text-2xl font-bold">{currentLocation.lat}</h1>
        <h1 className="text-2xl font-bold">{currentLocation.long}</h1>
        <button
          onClick={handleLocation}
          className="bg-blue-500 px-10 py-3 rounded-md"
        >
          Location BTN
        </button>
      </div>
    </div>
  );
};
export default Header;
