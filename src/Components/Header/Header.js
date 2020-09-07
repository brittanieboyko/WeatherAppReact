import React from "react";
import Moment from "react-moment";
import Container from "react-bootstrap/Container";

const Header = (props) => {
  const dateToFormat = new Date();
  return (
    <Container>
      {props.cityName ? (
        <h1> Weather in {props.cityName}</h1>
      ) : (
        <h1>Weather</h1>
      )}
      <Moment format="dddd, MMM D">{dateToFormat}</Moment>
    </Container>
  );
};

export default Header;
