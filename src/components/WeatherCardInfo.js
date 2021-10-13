import React from "react";

// Prop getCityByName
export default function WeatherCardInfo({ weatherInfo }) {
  const { getCityByName } = weatherInfo;

  // animtedIcon function takes param as current weather condition and renders icon.
  // Clouds,clear,rain etc.
  const animatedIcon = (summary) => {
    switch (summary) {
      case "Clouds":
        return (
          <div class='icon cloudy'>
            <div class='cloud'></div>
            <div class='cloud'></div>
          </div>
        );

      case "Clear":
        return (
          <div class='icon sunny'>
            <div class='sun'>
              <div class='rays'></div>
            </div>
          </div>
        );

      case "Rain":
        return (
          <div class='icon rainy'>
            <div class='cloud'></div>
            <div class='rain'></div>
          </div>
        );

      case "Snow":
        return (
          <div class='icon flurries'>
            <div class='cloud'></div>
            <div class='snow'>
              <div class='flake'></div>
              <div class='flake'></div>
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
        <p className='info-text'>Sıcaklık : {getCityByName.weather.temperature.actual}</p>
        <p className='info-text'>Nem : {getCityByName.weather.clouds.humidity}</p>
        <p className='info-text'>Rüzgar : {getCityByName.weather.wind.speed}</p>
        <p className='info-text'>Tarih : {getCityByName.timestamp}</p>
      </div>
    </div>
  );
}
