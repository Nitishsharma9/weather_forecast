import React from "react";
import "./Display.css";
const DisplayWeather = ({
  
  temperature,
  description,
  location,
  region,
  country,
  localtime,
  wind_speed,
  pressure,
  humidity,
  img,
}) => {
  return (
    <div className="container expand-lg bg-transparent mt-md-5 text-white border border-secondary rounded">
      <div className="row mt-md-5 mb-md-5">
        <div className="col-md-4">
          <h1>
            {temperature}
            <sup>o</sup>C , {description}
          </h1>
          <h4>{location}</h4>
          <p>
            {region} , {country} , {localtime}
          </p>
        </div>
        <div className="col-md-8 ">
          <img src={img} alt="weather img" className="ml-md-5" style={{width:150, height: 150 }}/>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-md-3 weather-info">
          <h3 className="wind">Wind Speed </h3>
          <h2>{wind_speed}</h2>
        </div>
        <div className="col-md-3 weather-info ">
          <h3 className="pressure">Pressure</h3>
          <h2>{pressure}</h2>
        </div>
        
        <div className="col-md-3 weather-info ">
          <h3 className="humidity">Humidity</h3>
          <h2>{humidity}</h2>
        </div>
      </div>
    </div>
  );
};

export default DisplayWeather;
