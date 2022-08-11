import React, {useState} from "react";
import axios from "axios";

export default function Search() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState("");

  function showWeather(response) {
    let temp = Math.round(response.data.main.temp);
    let speed = Math.round(response.data.wind.speed);
    let weather = {
      city: response.data.name,
      temperature: temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: speed,
      alt: response.data.weather[0].description,
      src: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    };
    //console.log(response.data);
    setWeather(weather);
  }
  function updateWeather(event) {
    event.preventDefault();
    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "69967927e28d8590b78f96c348d2023b";
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  return (
    <div>
      <form id="search-city" onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="search"
            id="town"
            placeholder="Enter a city"
            autoFocus="on"
            className="search-input"
            onChange={updateWeather}
          />
          <input
            type="submit"
            id="search"
            className="btn search"
            value="Search"
          />
        </div>
      </form>

      <div className="row info-box">
        <div className="col">
          <h2>
            In {weather.city} is {weather.temperature} °C.
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-6 showTemperature">
          <div className="temperature">
            <img src={weather.src} alt={weather.alt} />
          </div>
        </div>
        <div className="col-6 metrics-description showTemperature">
          <ul>
            Description: <span id="description">{weather.description}</span>
            <br />
            Humidity: <span id="humidity">{weather.humidity}%</span>
            <br />
            Wind: <span id="wind">{weather.wind} m/s</span>
          </ul>
        </div>
      </div>
    </div>
  );
}


