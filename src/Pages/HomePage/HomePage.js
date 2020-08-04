import React from 'react';
import Header from '../../Components/Header/Header'
import CurrentForecast from '../../Components/CurrentForecast/CurrentForecast';
import SearchBar from '../../Components/SearchBar/SearchBar';

function HomePage() {
  return (
    <>
      <Header />
      <CurrentForecast />
      <SearchBar />
    </>
  );
}

export default HomePage;
