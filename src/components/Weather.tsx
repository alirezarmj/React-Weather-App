import { useState, useCallback } from "react";
import { useFetchWeather } from "../hooks/useFetchWeather";
import { useGeolocation } from "../hooks/useGeolocation";
import Forecast from "./Forecast";
import Spinner from "./Spinner";
import WeatherCard from "./WeatherCard";

const Weather = () => {
  const { loading: geoLoading, error: geoError, data: geoData } = useGeolocation();

  const [city, setCity] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");

  const { isLoading: weatherLoading, error: weatherError, data } = useFetchWeather(geoData, searchQuery);

  const handleSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!city.trim()) return;
      setSearchQuery(city.trim());
    },
    [city]
  );
  console.log("weatherError:", weatherError);
  return (
    <div>
      {/* 🔹 Geo error */}
      {geoError && <p className="text-red-500 capitalize text-lg font-semibold text-center mb-1">{geoError.message}</p>}

      {/* 🔹 Search always visible */}
      <div className="shadow-md bg-white p-4 rounded-lg mb-1 w-full">
        <form className="flex justify-center gap-2" onSubmit={handleSearch}>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" className="p-2 border border-gray-300 rounded-lg" />
          <button type="submit" disabled={!city.trim()} className="p-2 bg-blue-500 text-white cursor-pointer rounded disabled:cursor-not-allowed disabled:opacity-50">
            Search
          </button>
        </form>
      </div>

      {/* 🔹 Geo loading  */}
      {geoLoading && <Spinner loading />}

      {/* 🔹 Weather loading */}
      {weatherLoading && !geoLoading && (
        <div className="flex justify-center my-6">
          <Spinner loading />
        </div>
      )}

      {/* 🔹 Weather error */}
      {weatherError && <p className="text-red-500 capitalize text-lg font-semibold text-center mb-4">{weatherError?.message}</p>}

      {/* 🔹 Current Weather */}
      {data?.currentWeather && !weatherLoading && (
        <div className="shadow-md bg-white p-4 rounded-lg mb-4 w-full">
          <WeatherCard currentWeather={data.currentWeather} />
        </div>
      )}

      {/* 🔹 Forecast */}
      {data?.forecastWeather && !weatherLoading && (
        <div className="shadow-md bg-white p-4 rounded-lg w-full">
          <Forecast forecastWeather={data.forecastWeather} />
        </div>
      )}
    </div>
  );
};

export default Weather;
