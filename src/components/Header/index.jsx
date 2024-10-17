import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [currentLocation, setCurrentLocation] = useState({
    lat: null,
    long: null,
  });
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          });
        },
        (error) => {
          setErrorMessage(
            "Unable to retrieve location. Please enable location services and try again."
          );
          console.error(error);
        }
      );
    } else {
      setErrorMessage("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto mt-10 p-10 rounded-md w-full bg-slate-900 text-white">
        {errorMessage ? (
          <h1 className="text-xl font-bold">{errorMessage}</h1>
        ) : (
          <>
            <h1 className="text-2xl font-bold">
              Latitude: {currentLocation.lat}
            </h1>
            <h1 className="text-2xl font-bold">
              Longitude: {currentLocation.long}
            </h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
