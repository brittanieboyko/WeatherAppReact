import React from "react";
import Card from "react-bootstrap/Card";
import Moment from 'react-moment';
import "./style.css";

const DailyForecast = (props) => {
  const convertToFahrenheit = (temp) => (temp - 273.15) * 1.8 + 32;

  const temperatureInFahrenheit = convertToFahrenheit(props.value.temp.day);
  const todaysDate = new Date();

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${props.value.weather[0].icon}@2x.png`} className="icon"/>
      <Card.Body>
        <Card.Title>
          <Moment add={{ days: props.dayOfWeek }} format="dddd">{todaysDate}</Moment>
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