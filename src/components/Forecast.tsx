import { WEATHER_ICON_URL } from "../constants/weather";
import { getShortDate } from "../utils";
import type { ForeCastItem } from "../utils/types/location";

const Forecast = ({ forecastWeather }: { forecastWeather: any }) => {
  return (
    <>
      <h1 className="text-lg font-bold mb-4 text-center"> Forecast </h1>
      <div className="flex flex-wrap gap-2">
        {forecastWeather.list.slice(0, 5).map((forecastItem: ForeCastItem, index: number) => {
          console.log("forecastItem: ", forecastItem);
          const { dt, weather, main, wind } = forecastItem;
          return (
            <div key={index} className="p-2  rounded-lg  shadow-md ">
              <p className="font-semibold ">{getShortDate(dt)}</p>
              <div className="flex justify-center mb-1">
                <img src={`${WEATHER_ICON_URL}${weather[0].icon}.png`} alt={weather[0].description} className="w-16 h-16 mr-2" />
              </div>
              <p className="text-xl font-bold text-center"> {Math.round(main.temp)}°C</p>
              <p className="font-semibold text-center">{weather[0].main}</p>
              <div className="text-center">{Math.round(wind.speed)}m/s</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Forecast;
