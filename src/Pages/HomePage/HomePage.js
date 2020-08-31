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
    cityName: "",
    locationSearch: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    alert("You are submitting " + this.state.locationSearch);
  }

  onChange = (e) => {
    this.setState({locationSearch: e.target.value});
  }


  convertToFahrenheit(temp) {
    const tempInFahrenheit = (temp - 273.15) * 1.8 + 32;
    this.setState({ temperature: tempInFahrenheit.toFixed(0) });
  }

  getWeather() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.latitude}&lon=${this.state.longitude}&exclude=minutely&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        this.setState({
          sevenDayForecast: res.data.daily,
        });
        const temp = parseInt(res.data.current.temp);
        this.convertToFahrenheit(temp);
      })
      .then(() => {
        this.getCityName();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getCityName() {
    const requestUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

    axios
      .get(requestUrl)
      .then((res) => {
        this.setState({
          cityName: res.data.results[0].address_components[3].long_name
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
  }

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
  }

  componentDidMount() {
    this.getUserLocation();
  }

  render() {
    return (
      <>
        <Header cityName={this.state.cityName}/>
        <CurrentForecast temperature={this.state.temperature} />
        <SearchBar onChange={this.onChange} onSubmit={this.onSubmit}/>
        <DailyForecastContainer
          sevenDayForecast={this.state.sevenDayForecast}
        />
      </>
    );
  }
}

export default HomePage;
