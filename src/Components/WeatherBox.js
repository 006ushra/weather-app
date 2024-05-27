import React from "react";
import sun from "../Images/sun.svg"
import "../Styles/WeatherBox.css"

export default class WeatherBox extends React.Component {
    render() {
        return (
            <div className="weather-box">
                <h1>Saturday</h1>
                <img src={sun} alt="sun" />
                <span className="temp">23°C</span>
            </div>
        )
    }
}