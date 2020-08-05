import React from 'react';

const CurrentForecast = (props) => {
    console.log(props)
    return (
        <div>
            {props.temperature} degrees
        </div>
    )
};

export default CurrentForecast;