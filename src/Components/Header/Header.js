import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import CurrentForecast from "../../Components/CurrentForecast/CurrentForecast";
import "./Header.css";

const Header = (props) => {
  return (
    <Jumbotron>
      {props.cityName ? (
        <div>
          <h1> Weather in {props.cityName}</h1>
          <CurrentForecast temperature={props.temperature} />
        </div>
      ) : (
        <h1>Weather</h1>
      )}
    </Jumbotron>
  );
};

export default Header;
