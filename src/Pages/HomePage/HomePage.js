import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import DailyForecastContainer from "../../Components/DailyForecastContainer/DailyForecastContainer";
import axios from "axios";

const HomePage = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [temperature, setTemperature] = useState("");
  const [sevenDayForecast, setSevenDayForecast] = useState("");
  const [currentCityName, setCurrentCityName] = useState("");
  const [locationSearchTerm, setLocationSearchTerm] = useState("");
  const [loading, setLoading] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    getCityCoordinates();
  };

  const onChange = (e) => {
    setLocationSearchTerm(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    getUserLocation();
  };

  const getCityCoordinates = () => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${locationSearchTerm}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      )
      .then((res) => {
        if (res.data.results.length >= 1) {
          setLatitude(res.data.results[0].geometry.location.lat);
          setLongitude(res.data.results[0].geometry.location.lng);
          getWeather();
        } else {
          console.log("no results");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude={minutely,hourly}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
      )
      .then((res) => {
        setSevenDayForecast(res.data.daily);
        setTemperature(res.data.current.temp.toFixed(0));
        setLoading(false);
      })
      .then(() => {
        getCityName();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCityName = () => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      )
      .then((res) => {
        setCurrentCityName(res.data.results[0].address_components[3].long_name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showPosition = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("geolocation is not supported");
    }
  };
  useEffect(() => {
    if (longitude !== "") {
      getWeather();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [longitude]);

  return (
    <>
      <Header
        cityName={currentCityName}
        temperature={temperature}/>
      <SearchBar
        onChange={onChange}
        onSubmit={onSubmit}
        onClick={onClick}
        loading={loading}
      />
      <DailyForecastContainer sevenDayForecast={sevenDayForecast} />
    </>
  );
};

export default HomePage;
