export interface Location {
  latitude: number;
  longitude: number;
  accuracy: number;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  speed: number | null;
}

export interface ForeCastItem {
  dt: number;
  dt_txt: string;
  wind: { speed: number };
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
}

export interface GeoData {
  latitude: number;
  longitude: number;
}
