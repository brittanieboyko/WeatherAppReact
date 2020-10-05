import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import GetLocationModal from "../../Components/GetLocationModal/GetLocationModal";
import "./Header.css";
import Moment from "react-moment";

const Header = (props) => {
  const dateToFormat = new Date();
  return (
    <Jumbotron>
      {props.cityName ? (
        <Container>
          <Row>
            <h1>
              {" "}
              It's currently {props.temperature} &deg; in {props.cityName}
            </h1>
          </Row>
          <Row>
            <h2>
              <Moment format="dddd, MMM D">{dateToFormat}</Moment>{" "}
            </h2>
          </Row>
        </Container>
      ) : (
        <div>
          <h1 className="header">Weather</h1>
          <div>
            <GetLocationModal onClick={props.onClick} loading={props.loading} />
          </div>
        </div>
      )}
    </Jumbotron>
  );
};

export default Header;
