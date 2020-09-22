import React from "react";
import DailyForecast from "../DailyForecast/DailyForecast";
import Row from "react-bootstrap/Row";
import "./DailyForecastContainer.css";

const DailyForecastContainer = (props) => {
  const dailyForecasts = props.sevenDayForecast;

  return (
    <div className="forecast-container">
      <Row>
        {dailyForecasts ? (
          dailyForecasts.map((forecast) => (
            <DailyForecast
              key={Math.random() * 10}
              value={forecast}
              dayOfWeek={dailyForecasts.indexOf(forecast)}
            />
          ))
        ) : (
          <p></p>
        )}
      </Row>
    </div>
  );
};
export default DailyForecastContainer;
