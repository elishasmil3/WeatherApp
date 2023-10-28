import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
import clouds from "../assets/clouds.png";
import React from "react";

const WeatherReport = () => {
  return (
    <div className="weather text-center text-white">
      <img className="mx-auto" src={clouds} alt="" />
      <h1 className="text-7xl font-bold">7°C</h1>
      <h2 className="text-5xl mb-8">New York</h2>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <img src={humidity} className="w-10 h-10" alt="HUMIDITIY" />
          <div className="flex flex-col text-left">
            <h3 className="">43%</h3>
            <h5>Humidity</h5>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img src={wind} className="w-10 h-10" alt="wind" />
          <div className="flex flex-col text-left">
            <h3>10.23 km/h</h3>
            <h5>Wind Speed</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherReport;
