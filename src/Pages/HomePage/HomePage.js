import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import CurrentForecast from "../../Components/CurrentForecast/CurrentForecast";
import SearchBar from "../../Components/SearchBar/SearchBar";
import DailyForecastContainer from "../../Components/DailyForecastContainer/DailyForecastContainer";
import axios from "axios";

class HomePage extends Component {
  state = {
    latitude: "",
    longitude: "",
    temperature: "",
    sevenDayForecast: "",
    currentCityName: "",
    locationSearchTerm: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.getCityCoordinates();
  };

  onChange = (e) => {
    this.setState({ locationSearchTerm: e.target.value });
  };

  getCityCoordinates = () => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.locationSearchTerm}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          latitude: res.data.results[0].geometry.location.lat,
          longitude: res.data.results[0].geometry.location.lng,
        });
        this.getWeatherFromSearch();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getWeather() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.latitude}&lon=${this.state.longitude}&units=imperial&exclude={minutely,hourly}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
      )
      .then((res) => {
        console.log("initial weather",res.data)
        this.setState({
          sevenDayForecast: res.data.daily,
          temperature: res.data.current.temp,
        });
      })
      .then(() => {
        this.getCityName();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getWeatherFromSearch() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.latitude}&lon=${this.state.longitude}&units=imperial&exclude={minutely,hourly}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
      )
      .then((res) => {
        console.log("search results",res.data);
        this.setState({
          sevenDayForecast: res.data.daily,
          temperature: res.data.current.temp,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getCityName() {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      )
      .then((res) => {
        this.setState({
          currentCityName: res.data.results[0].address_components[3].long_name,
        });
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
        <Header cityName={this.state.currentCityName} />
        <CurrentForecast temperature={this.state.temperature} />
        <SearchBar onChange={this.onChange} onSubmit={this.onSubmit} />
        <DailyForecastContainer sevenDayForecast={this.state.sevenDayForecast} />
      </>
    );
  }
}

export default HomePage;
