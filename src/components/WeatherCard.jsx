import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
import clouds from "../assets/clouds.png";
import React from "react";

const WeatherCard = ({ report }) => {
  console.log(report);
  return (
    <div className="weather text-center text-white">
      <img className="mx-auto" src={clouds} alt="" />
      <h1 className="text-7xl font-bold mt-4">{report.current.temp_c}° C</h1>
      <h2 className="text-5xl my-4 font-bold">{report.location.name}</h2>
      <h3 className="text-3xl mb-8">{report.location.tz_id}</h3>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <img src={humidity} className="w-10 h-10" alt="HUMIDITIY" />
          <div className="flex flex-col text-left">
            <h3 className="">{report.current.humidity}%</h3>
            <h5>Humidity</h5>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img src={wind} className="w-10 h-10" alt="wind" />
          <div className="flex flex-col text-left">
            <h3>{report.current.wind_kph} km/h</h3>
            <h5>Wind Speed</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
