const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5";

const CURRENT_WEATHER_URL = `${WEATHER_BASE_URL}/weather`;
const FORECAST_WEATHER_URL = `${WEATHER_BASE_URL}/forecast`;

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY as string;

const WEATHER_ICON_URL = "https://openweathermap.org/img/wn/";

export { CURRENT_WEATHER_URL, FORECAST_WEATHER_URL, WEATHER_API_KEY, WEATHER_ICON_URL };
