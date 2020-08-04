import React from 'react';
import Header from './Components/Header/Header';
import CurrentForecast from './Components/CurrentForecast/CurrentForecast';
import SearchBar from './Components/SearchBar/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <CurrentForecast />
      <SearchBar />
    </>
  );
}

export default App;
