import React from 'react';
import Header from './Components/Header/Header';
import CurrentForecast from './Components/CurrentForecast/CurrentForecast';
import SearchBar from './Components/SearchBar/SearchBar';
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
