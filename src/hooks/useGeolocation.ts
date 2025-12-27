import { useEffect, useState } from "react";
import type { Location } from "../utils/types/location";

type GeolocationError = GeolocationPositionError | null;

export const useGeolocation = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<GeolocationError>(null);
  const [data, setData] = useState<Location | null>(null);

  useEffect(() => {
    const onSuccess = (position: GeolocationPosition) => {
      setLoading(false);
      setError(null);
      setData(position.coords);
    };

    const onError = (err: GeolocationPositionError) => {
      setLoading(false);
      setError(err);
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return { loading, error, data };
};
