import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import CurrentForecast from "../../Components/CurrentForecast/CurrentForecast";
import GetLocationModal from "../../Components/GetLocationModal/GetLocationModal";
import "./Header.css";

const Header = (props) => {
  return (
    <Jumbotron>
      {props.cityName ? (
        <Row>
          <h1> Weather in {props.cityName}</h1>
          <CurrentForecast temperature={props.temperature} />
        </Row>
      ) : (
        <div>
          <h1>Weather</h1>
          <p>
            <GetLocationModal onClick={props.onClick} loading={props.loading} />
          </p>
        </div>
      )}
    </Jumbotron>
  );
};

export default Header;
