import React from "react";
import "../Styles/CityInput.css"

export default class CityInput extends React.Component {
    state = {
        isCitySet: false
    }
    render(props) {
        const onClickHandler = (e) => {
            const eventKey = e.which? e.which: e.keyCode;
            if(eventKey === 13){
                if(/^[a-zA-Z]+$/.test(e.target.value)){
                    this.props.setCity(e);
                    this.setState({isCitySet: true});
                    e.target.value="";
                    e.target.placeholder="Enter a city";
                } else {
                    e.target.value="";
                    e.target.placeholder="Please enter a valid city name"
                }
            }
        }
        return (
            <input className="city-input"
                type="text"
                placeholder="Enter a city"
                style={{top: this.props.city? '-400px': '78px'}}
                onKeyDown={onClickHandler}
            />
        )
    }
}