import React from "react";
import sun from "../Images/sun.svg"
import "../Styles/WeatherBox.css"

export default class WeatherBox extends React.Component {
    render() {
        return (
            <div className="weather-box">
                <img src={sun} alt="sun" />
                <h1>Day X</h1>
            </div>
        )
    }
}