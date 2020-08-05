import React, { Component } from 'react';
import Header from '../../Components/Header/Header'
import CurrentForecast from '../../Components/CurrentForecast/CurrentForecast';
import SearchBar from '../../Components/SearchBar/SearchBar';
import axios from 'axios';

class HomePage extends Component {
    state = {
        latitude: '',
        longitude: ''
      }

    getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            console.log("geolocation is not supported")
        }
    }

    showPosition = (position) => {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
        this.getWeather()

    }

    componentDidMount() {
        this.getUserLocation();
    }

    getWeather() {
        const openWeatherAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.latitude}&lon=${this.state.longitude}&
        exclude=minutely&appid=${process.env.REACT_APP_API_KEY}`
        axios.get(openWeatherAPI)
        .then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        }) 
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