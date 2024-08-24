import React, { useState, useEffect} from 'react';
import tempimg from './../assets/temp.png';
import mintemp from './../assets/mintemp.png';
import maxtemp from './../assets/maxtemp.png';
import humidityimg from './../assets/humidity.png';
import windimg from './../assets/wind.png';

const WeatherDetails = ({ weather, wind }) => {
  if (!weather) return <p> </p>;//No weather data available.

  const {
    temp = 'N/A',
    temp_min = 'N/A',
    temp_max = 'N/A',
    humidity = 'N/A'
  } = weather.main;

  const { main = 'No description', icon = '01d' } = weather.weather ? weather.weather[0] : {};
  const { speed = 'N/A', deg = 'N/A' } = wind || {};
    
  
  return (
    <div className="weather-details">
      <h2>Today</h2>
      <div className="weather-summary">
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={main} />
        <h3>{main}</h3>
        <div className='inner'>

            <div className='attri'>   
              <div className='weather-attri'><img src={tempimg}/>   <h3>Temp:</h3> </div><h3>{temp}°</h3></div>
            <div className='attri'>   
              <div className='weather-attri'><img src={mintemp}/> <h3>Min. Temp:</h3></div><h3>{temp_min}°</h3></div>
            <div className='attri'><div className='weather-attri'><img src={maxtemp}/> <h3>Max Temp:</h3></div><h3>{temp_max}°</h3></div>
            <div className='attri'><div className='weather-attri'><img src={humidityimg} style={{width:'25px', height:'25px', marginLeft:'10px'}}/> <h3> Humidity:</h3></div><h3>{humidity}%</h3></div>
            <div className='attri'><div className='weather-attri'><img src={windimg}/><h3>Wind: </h3></div><h3>{speed} m/s, {deg}°</h3></div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
