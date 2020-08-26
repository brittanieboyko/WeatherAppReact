import React from "react";
import Card from "react-bootstrap/Card";
import Moment from 'react-moment';

const DailyForecast = (props) => {
  const convertToFahrenheit = (temp) => (temp - 273.15) * 1.8 + 32;
  console.log("7dayforecast", props);

  const temperatureInFahrenheit = convertToFahrenheit(props.value.temp.day);
  const todaysDate = new Date();

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>
          <Moment add={{ days: props.dayOfWeek }}>{todaysDate}</Moment>
        </Card.Title>
        <Card.Text>
            {props.value.weather[0].description}
        </Card.Text>
        <Card.Text>
          temperature will be {temperatureInFahrenheit.toFixed(0)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DailyForecast;
