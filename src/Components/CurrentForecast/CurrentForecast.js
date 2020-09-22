import React from "react";
import Container from "react-bootstrap/Container";

const CurrentForecast = (props) => {
  return (
    <Container>
      {props.temperature ? <h2>Currently {props.temperature} &deg; </h2> : <h2> </h2>}
    </Container>
  );
};

export default CurrentForecast;
