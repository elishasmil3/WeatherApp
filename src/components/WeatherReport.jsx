import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

const WeatherReport = ({ query }) => {
  const [report, setReport] = useState(null);
  useEffect(() => {
    let APIKey = `93a1ebf54d3a40f79a203615232810&q`;
    let url = `https://api.weatherapi.com/v1/current.json?key=${APIKey}=${query}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => setReport(res));
  }, [query]);
  console.log(report);
  return (
    <>
 {report && <WeatherCard report={report} />}
    </>
  );
};

export default WeatherReport;
