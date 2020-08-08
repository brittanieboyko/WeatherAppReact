import React from "react";
import DailyForecast from "../DailyForecast/DailyForecast";

const DailyForecastContainer = (props) => {
  const dailyForecasts = props.sevenDayForecast;

  return dailyForecasts ? (
    dailyForecasts.map((forecast) => (
      <DailyForecast key={Math.random() * 10} value={forecast} />
    ))
  ) : (
    <p> weather not avail</p>
  );
};

export default DailyForecastContainer;
