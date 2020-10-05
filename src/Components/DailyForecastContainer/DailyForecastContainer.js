import React from "react";
import DailyForecast from "../DailyForecast/DailyForecast";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./DailyForecastContainer.css";

const DailyForecastContainer = (props) => {
  const dailyForecasts = props.sevenDayForecast;

  return (
    <div className="forecast-container">
      <Container>
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
      </Container>
    </div>
  );
};
export default DailyForecastContainer;
