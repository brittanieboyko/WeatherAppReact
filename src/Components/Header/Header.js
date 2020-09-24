import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import CurrentForecast from "../../Components/CurrentForecast/CurrentForecast";

const Header = (props) => {
  return (
    <Jumbotron>
      {props.cityName ? (
        <>
        <h1> Weather in {props.cityName}</h1>
        <CurrentForecast temperature={props.temperature} />
        </>
      ) : (
        <h1>Weather</h1>
      )}
    </Jumbotron>
  );
};

export default Header;
