import React from "react";
import Card from "react-bootstrap/Card";

const DailyForecast = (props) => {
  const convertToFahrenheit = (temp) => (temp - 273.15) * 1.8 + 32;
  console.log("7dayforecast", props);

  const temperatureInFahrenheit = convertToFahrenheit(props.value.temp.day);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Monday</Card.Title>
        <Card.Text>
          temperature will be {temperatureInFahrenheit.toFixed(0)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DailyForecast;
