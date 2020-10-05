import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Moment from "react-moment";
import "./DailyForecast.css";

const DailyForecast = (props) => {
  const todaysDate = new Date();

  return (
    <Col sm={4}>
      <div className="weather-card">
        <Card>
          <Card.Img
            variant="top"
            src={`http://openweathermap.org/img/wn/${props.value.weather[0].icon}@2x.png`}
            className="icon"
          />
          <Card.Body>
            <Card.Title>
              <Moment add={{ days: props.dayOfWeek }} format="dddd">
                {todaysDate}
              </Moment>
            </Card.Title>
            <Card.Text>
              {props.value.temp.max.toFixed(0)} &deg;
            </Card.Text>
            <Card.Text>{props.value.weather[0].description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default DailyForecast;
