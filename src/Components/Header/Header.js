import React from 'react';
import Moment from 'react-moment';
import Container from "react-bootstrap/Container";

const Header = (props) => {
    const dateToFormat = new Date();
    return (
        <Container>
            <h1> Weather {props.cityName}</h1>
            <Moment format="dddd, MMM D">{dateToFormat}</Moment>
        </Container>
    )
};

export default Header;