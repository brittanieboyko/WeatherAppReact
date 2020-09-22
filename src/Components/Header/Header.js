import React from "react";
import Container from "react-bootstrap/Container";

const Header = (props) => {
  return (
    <Container>
      {props.cityName ? (
        <h1> Weather in {props.cityName}</h1>
      ) : (
        <h1>Weather</h1>
      )}
    </Container>
  );
};

export default Header;
