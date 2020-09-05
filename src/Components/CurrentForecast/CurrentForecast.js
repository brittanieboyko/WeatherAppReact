import React from 'react';
import Container from "react-bootstrap/Container";

const CurrentForecast = (props) => {
    return (
        <Container>
            {props.temperature} degrees
        </Container>
    )
};

export default CurrentForecast;