import React from "react";
import "../Styles/CityInput.css"

export default class CityInput extends React.Component {
    render(props) {
        return (
            <input className="city-input"
                type="text"
                placeholder="Enter a city"
            />
        )
    }
}