
import React, { useState } from 'react';
import Axios from 'axios';
import './weather.css';

const API_key = 'e6a0a706f92d32b6e8a1fcbbd8bf14cd';

const Weather = () => {
  const [cityName, setCityName] = useState('');
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`);
      setData(response.data);
    } catch (err) {
      alert('Enter the city name');
    }
  };

  return (
    <div className='App'>
      <h1 className='Title'>"WEATHER-BOOTH!"</h1>
      <div className='container'>
        <h3>Enter the City Name:</h3> {/* Move the label above the input field */}
        <div className='input-container'>
          <input
            type="text"
            className='input'
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            placeholder="City Name"
          />
          <button className='button' onClick={fetchData}>
            FETCH
          </button>
        </div>
        <div>
          {data && (
            <div>
              <h2>{data.name}</h2>
              <p>Temperature: {Math.round(data.main.temp - 273.15)}°C</p>
              <p>Weather: {data.weather[0].main}</p>
              {/* Add more details as needed */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;