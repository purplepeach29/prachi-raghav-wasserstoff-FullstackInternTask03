import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import WeatherDetails from './components/WeatherDetails';
import WeatherForecast from './components/WeatherForecast';
import mist from './assets/mist.jpg';
import defaultimg from './assets/default.jpg';
import rain from './assets/rain.jpg';
import haze from './assets/haze.jpg';
import back from './assets/bg.gif';

import './styles/App.css';

const API_KEY = '76bde0717dfb4dd252ac6ce284e36507'; // API key from openweathermap
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

function App() {
  const [weather, setWeather] = useState(null);
  const [wind, setWind] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [unit, setUnit] = useState('metric');
  const [error, setError] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const [backgroundImage, setBackgroundImage] = useState(back);

  const handleClear = (e) => {
    e.preventDefault();
    setWeather(null);
    setWind(null);
    setForecast(null);
    setUnit('metric');
    setError('');
    setCity(null);
    setCountry(null);
    setBackgroundImage(back);
  };

  const fetchWeather = async (city, unit) => {
    try {
      const weatherResponse = await axios.get(`${BASE_URL}/weather`, {
        params: {
          q: city,
          units: unit,
          appid: API_KEY,
        },
      });

      const forecastResponse = await axios.get(`${BASE_URL}/forecast`, {
        params: {
          q: city,
          units: unit,
          appid: API_KEY,
        },
      });
     // console.log(weatherResponse.data);
      //console.log(forecastResponse.data);

      const weatherData = weatherResponse.data;
      const forecastData = forecastResponse.data.list.filter((item, index) => index % 8 === 0) // Pick one forecast per day
        .map(item => ({
          date: new Date(item.dt * 1000).toLocaleDateString(),
          temp: item.main.temp.toFixed(1),
          description: item.weather[0].main,
          icon: item.weather[0].icon,
        }));
       
      //setWeather(weatherData.main);
      setWeather(weatherData);
      setWind(weatherData.wind);
      setForecast(forecastData);
      setError('');
      } catch (err) {
      setError('City not found or error fetching data');
      setWeather(null);
      setForecast(null);
    }
    
  };
  
  useEffect(() => {
    if (weather) {
      switch (weather.weather[0].main) {
        /*case 'clear':
          setBackgroundImage('clear.jpg');
          break;*/
        case 'Clouds':
          setBackgroundImage(defaultimg);
          break;
        case 'Haze':
          setBackgroundImage(haze);
          break;
        case 'Mist':
          setBackgroundImage(mist);
          break;
        case 'Rain':
        case 'Thunderstorm': 
          setBackgroundImage(rain);
          break;
        // Add more conditions as needed
        default:
          setBackgroundImage(defaultimg);
      }
    }
  }, [weather]);


  const display = city? city.toLocaleUpperCase()+ ", "+country: '';

  return (
    <div className="app"  style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url(${backgroundImage})` }}>
      <div className='nav'>
        <h2>WASSERFORECAST</h2>
      </div>
        <WeatherForm onSearch={fetchWeather} onUnitChange= {setUnit}/>     
        <button className='clear' onClick={handleClear}>X</button> 
        <WeatherDetails weather={weather} wind={wind}/>


      {error && <p className="error">{error}</p>}      
  
      <WeatherForecast forecast={forecast} />
    </div>
  );
}

export default App;
