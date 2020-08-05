import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import CurrentForecast from "../../Components/CurrentForecast/CurrentForecast";
import SearchBar from "../../Components/SearchBar/SearchBar";
import axios from "axios";

class HomePage extends Component {
  state = {
    latitude: "",
    longitude: "",
  };

  getWeather() {
    axios
      .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.latitude}&lon=${this.state.longitude}&exclude=minutely&appid=${process.env.REACT_APP_API_KEY}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  showPosition = (position) => {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    this.getWeather();
  };

  showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("Very Curious");
        break;
    }
  }

  getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.showPosition,
        this.showError
      );
    } else {
      console.log("geolocation is not supported");
    }
  };

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
