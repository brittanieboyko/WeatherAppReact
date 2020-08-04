import React, { Component } from 'react';
import Header from '../../Components/Header/Header'
import CurrentForecast from '../../Components/CurrentForecast/CurrentForecast';
import SearchBar from '../../Components/SearchBar/SearchBar';

class HomePage extends Component {

    getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            console.log("geolocation is not supported")
        }
    }

    showPosition = (position) => {
        console.log("latitude:", position.coords.latitude, "longitude:", position.coords.longitude)
    }

    componentDidMount() {
        this.getUserLocation();
    }
    render() {
        return (
          <>
            <Header />
            <CurrentForecast />
            <SearchBar />
          </>
        );

    }
}

export default HomePage;


// axios({
//     method: 'get',
//     url: 'http://bit.ly/2mTM3nY',
//     responseType: 'stream'
//   })
//     .then(function (response) {
//       response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//     });

// process.env.REACT_APP_GOOGLE_API_KEY