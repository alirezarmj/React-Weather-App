import { WEATHER_ICON_URL } from "../constants/weather";
import { getFormatedDate } from "../utils";

const WeatherCard = ({ currentWeather }: { currentWeather: any }) => {
  const { name, main, weather, sys, wind } = currentWeather;
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold mb-2">
        {name} {sys?.country}{" "}
      </h2>
      <h3 className="text-sm">{getFormatedDate()}</h3>
      <h3 className="mt-2 mb-4 font-semibold">Current Weather</h3>
      <div className="flex items-center justify-center mb-4">
        <img src={`${WEATHER_ICON_URL}${weather[0].icon}@2x.png`} alt={weather[0].description} className="w-16 h-16 mr-2" />
        <span className="text-4xl font-bold pr-6">
          {Math.round(main.temp)} <sup>°C</sup>
        </span>
        <div className="text-center">
          <span className="block font-semibold">{weather[0].main}</span>
          <span className="block text-sm">
            Feels like {Math.round(main.feels_like)} <sup>°C</sup>
          </span>
        </div>
      </div>
      <div className="flex justify-between text-sm w-full max-w-md">
        <div className="text-center">
          Wind <br /> {Math.round(wind.speed)}m/s
        </div>
        <div className="text-center">
          Humidity <br /> {main.humidity}%
        </div>
        <div className="text-center">
          Pressure <br />
          {main.pressure} mb
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
