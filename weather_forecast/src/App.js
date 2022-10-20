import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Search from './components/Search'
import Displayweather from './components/Displayweather'


function App() {
  const [location, setLocation] = useState({
    latitude: 45,
    longitude: 45,
  });
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setLocation(newLocation);
        getWeatherData(newLocation.latitude, newLocation.longitude,'');
      });
    } else {
      console.log(
        "Give location permission"
      );
      getWeatherData(location.latitude, location.longitude,'');
    }
  }, []);



  const getWeatherData = async (latitude, longitude,city) => {
    try {
      const res = await axios.get(
        "http://api.weatherstack.com/current?access_key=597ec67b599813bfe2139f287fcb23db&query=" +
          city+
          latitude +
          "," +
          longitude
      );
      const data = res.data;
      console.log(res)
      setWeatherData({
          
          temperature: data.current.temperature ,
          description: data.current.weather_descriptions[0],
          location: data.location.name,
          region: data.location.region,
          localtime: data.location.localtime,
          country: data.location.country,
          wind_speed: data.current.wind_speed,
          pressure: data.current.pressure,
          humidity: data.current.humidity,
          img: data.current.weather_icons,
        });
      
    } catch (error) {
        console.log('error')
    }
    
    

  };

  return(
    
      <div className="container ">
        <Search getWeatherData={getWeatherData}/>
        <Displayweather {...weatherData} />
      </div>
    
  );
}

export default App;



