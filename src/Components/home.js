import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; 

const Home = () => {
  return (
    <div className="weather-booth-home-container"> 
      <h1>Welcome to Weather-Booth</h1>
      <p>"Get real-time weather updates and forecasts at your fingertips"</p>
      <p>"Plan your day with accurate weather information"</p>
      <Link to="/weather">
        <button className="redirect-button">Enter Weather Booth</button>
      </Link>
    </div>
  );
};

export default Home;
