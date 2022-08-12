import React from "react";
import "./styles.css";



export default function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Weather today</h1>
      <div className="row">
          <input
            type="search"
            id="town"
            placeholder="Enter a city"
            autoFocus="on"
            className="search-input"
          />
          <input
            type="submit"
            id="search"
            className="btn search"
            value="Search"
          />
          <br />
          <h2>
            In Kyiv is 23 °C.
          </h2>
          <div className="col-6 metrics-description showTemperature">
          <ul>
            Description: sunny.
            <br />
            Humidity: 15 %.
            <br />
            Wind: 2 m/s.
          </ul>
        </div>
        </div>
      </header>
    </div>
    );
}