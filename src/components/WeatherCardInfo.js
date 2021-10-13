import React from "react";

// Prop getCityByName
export default function WeatherCardInfo({ weatherInfo }) {
  const { getCityByName } = weatherInfo;

  // default value that we fetched from graphql is kelvin  we need to convert it to celcius
  const kelvinToCelcius = (value) => value - 272.15;

  // UNIX to locale date string
  const getDate = (date) => new Date(date * 1000).toLocaleDateString("tr-TR");

  // animtedIcon function takes param as current weather condition and renders icon.
  // Clouds,clear,rain etc.
  const animatedIcon = (summary) => {
    switch (summary) {
      case "Clouds":
        return (
          <div className='icon cloudy'>
            <div className='cloud'></div>
            <div className='cloud'></div>
          </div>
        );

      case "Clear":
        return (
          <div className='icon sunny'>
            <div className='sun'>
              <div className='rays'></div>
            </div>
          </div>
        );

      case "Rain":
        return (
          <div className='icon rainy'>
            <div className='cloud'></div>
            <div className='rain'></div>
          </div>
        );

      case "Snow":
        return (
          <div className='icon flurries'>
            <div className='cloud'></div>
            <div className='snow'>
              <div className='flake'></div>
              <div className='flake'></div>
            </div>
          </div>
        );
      default:
        return (
          <div className='icon sun-shower'>
            <div className='cloud'></div>
            <div className='sun'>
              <div className='rays'></div>
            </div>
            <div className='rain'></div>
          </div>
        );
    }
  };

  return (
    <div className='info-wrapper'>
      <div className='info-icon'>{animatedIcon(getCityByName.weather.summary.title)}</div>
      <div className='info-title'>
        <h3>{getCityByName.name}</h3>
      </div>
      <div className='info-temperature'>
        <p className='info-text'>
          Sıcaklık : {kelvinToCelcius(getCityByName.weather.temperature.actual).toFixed(0)} °C
        </p>
        <p className='info-text'>Nem : %{getCityByName.weather.clouds.humidity}</p>
        <p className='info-text'>Rüzgar : {getCityByName.weather.wind.speed} m/s</p>
        <p className='info-text'>Tarih : {getDate(getCityByName.weather.timestamp)}</p>
      </div>
    </div>
  );
}
