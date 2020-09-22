import React from "react";
import Container from "react-bootstrap/Container";
import Moment from "react-moment";

const CurrentForecast = (props) => {
  const dateToFormat = new Date();
  return (
    <Container>
      {props.temperature ? (
        <>
          <h2>
            <Moment format="dddd, MMM D">{dateToFormat}</Moment>
          </h2>
          <h2>Currently {props.temperature} &deg; </h2>
        </>
      ) : (
        <h2>
          <Moment format="dddd, MMM D">{dateToFormat}</Moment>
        </h2>
      )}
    </Container>
  );
};

export default CurrentForecast;
