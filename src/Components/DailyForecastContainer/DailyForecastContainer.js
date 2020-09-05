import React from "react";
import DailyForecast from "../DailyForecast/DailyForecast";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const DailyForecastContainer = (props) => {
  const dailyForecasts = props.sevenDayForecast;

  return (
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
  );
};
export default DailyForecastContainer;
