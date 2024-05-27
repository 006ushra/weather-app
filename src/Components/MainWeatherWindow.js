import React from "react";
import "../Styles/MainWeatherWindow.css"
import sun from "../Images/sun.svg"

export default class MainWeatherWindow extends React.Component {
    render(props) {
        return (
            <div className="main">
                <div className="inner-main">
                    <img src={sun} alt="sun" style={{ display: this.props.city ? 'block' : 'none' }} />
                    <div className="today" style={{ display: this.props.city ? 'flex' : 'none' }}>
                        <h1>{this.props.city}</h1>
                        <p>27°C</p>
                        <p>Precipitation: 30%</p>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}