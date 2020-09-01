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
    this.getWeatherFromSearch();
  };

  onChange = (e) => {
    this.setState({ locationSearchTerm: e.target.value });
  };

  getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
    console.log(url);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.latitude}&lon=${this.state.longitude}&units=imperial&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
      )
      .then((res) => {
        console.log("5dayforecast", res.data);
        this.setState({
          currentCityName: res.data.city.name,
        });
        // this.setState({
        //   sevenDayForecast: res.data.daily,
        // });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getWeatherFromSearch() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.locationSearchTerm}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
      )
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
        <Header cityName={this.state.currentCityName} />
        <CurrentForecast temperature={this.state.temperature} />
        <SearchBar onChange={this.onChange} onSubmit={this.onSubmit} />
        <DailyForecastContainer
          sevenDayForecast={this.state.sevenDayForecast}
        />
      </>
    );
  }
}

export default HomePage;
