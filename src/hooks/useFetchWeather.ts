import { useQuery } from "@tanstack/react-query";
import { fetchWeatherByCity, fetchWeatherByCoords } from "../services/api";

export const useFetchWeather = (geoData: any, searchQuery: any) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["weather", searchQuery || geoData],
    queryFn: () => {
      if (searchQuery) {
        return fetchWeatherByCity(searchQuery);
      }
      if (geoData?.latitude && geoData?.longitude) {
        return fetchWeatherByCoords(geoData);
      }
      return Promise.reject(new Error("No location data provided"));
    },
    enabled: !!searchQuery || !!(geoData?.latitude && geoData?.longitude),
    staleTime: 60 * 60 * 1000, // 1 hour stale time
    gcTime: 60 * 60 * 1000, // 1 hour cache time
  });

  return { isLoading, error, data };
};
