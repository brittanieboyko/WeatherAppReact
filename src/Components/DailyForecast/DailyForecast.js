import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Moment from "react-moment";
import "./style.css";

const DailyForecast = (props) => {
  const todaysDate = new Date();

  return (
    <Col sm={4}>
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
          <Card.Text>{props.value.weather[0].description}</Card.Text>
          <Card.Text>
            temperature will be {props.value.temp.day.toFixed(0)}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DailyForecast;
