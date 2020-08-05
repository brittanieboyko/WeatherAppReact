import React from 'react';

const CurrentForecast = (props) => {
    console.log(props)
    return (
        <div>
            {props.temp} degrees
        </div>
    )
};

export default CurrentForecast;