import React from 'react';
import Card from 'react-bootstrap/Card';

const DailyForecast = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Monday</Card.Title>
                <Card.Text>
                Monday's weather will be VERY NICE
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default DailyForecast;