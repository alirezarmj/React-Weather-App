import axios from "axios";
import { getAxiosErrorMessage } from "./errorHelper";
import type { GeoData } from "../utils/types/location";
import { CURRENT_WEATHER_URL, FORECAST_WEATHER_URL, WEATHER_API_KEY } from "../constants/weather";

export const fetchWeatherByCoords = async (geoData: GeoData) => {
  if (!geoData?.latitude || !geoData?.longitude) {
    throw new Error("Location not available");
  }

  try {
    const params = {
      lat: geoData.latitude,
      lon: geoData.longitude,
      appid: WEATHER_API_KEY,
      units: "metric",
    };

    const [current, forecast] = await Promise.all([axios.get(CURRENT_WEATHER_URL, { params }), axios.get(FORECAST_WEATHER_URL, { params })]);

    return {
      currentWeather: current.data,
      forecastWeather: forecast.data,
    };
  } catch (error) {
    throw new Error(getAxiosErrorMessage(error));
  }
};

export const fetchWeatherByCity = async (searchQuery: string) => {
  if (!searchQuery.trim()) {
    throw new Error("City name is required");
  }

  try {
    const params = {
      q: searchQuery,
      appid: WEATHER_API_KEY,
      units: "metric",
    };

    const [current, forecast] = await Promise.all([axios.get(CURRENT_WEATHER_URL, { params }), axios.get(FORECAST_WEATHER_URL, { params })]);

    return {
      currentWeather: current.data,
      forecastWeather: forecast.data,
    };
  } catch (error) {
    throw new Error(getAxiosErrorMessage(error));
  }
};
