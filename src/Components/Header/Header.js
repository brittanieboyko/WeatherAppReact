import React from 'react';
import Moment from 'react-moment';

const Header = (props) => {
    const dateToFormat = new Date();
    return (
        <>
            <h1> Weather in {props.cityName}</h1>
            <Moment format="dddd, MMM D">{dateToFormat}</Moment>
        </>
    )
};

export default Header;