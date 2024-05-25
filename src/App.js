import React from 'react';
import './Styles/App.css';
import MainWeatherWindow from './Components/MainWeatherWindow';
import CityInput from './Components/CityInput';
import WeatherBox from './Components/WeatherBox';

class App extends React.Component {
  state = {
    city: 'city name'
  }
  setCity = (e) => {
    this.setState({ city: e.target.value });
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <MainWeatherWindow test={this.state.city}>
            <CityInput setCity={this.setCity.bind(this)} />
            <ul className='weather-box-list'>
              <li><WeatherBox /></li>
              <li><WeatherBox /></li>
              <li><WeatherBox /></li>
              <li><WeatherBox /></li>
              <li><WeatherBox /></li>
            </ul>
          </MainWeatherWindow>
        </header>
      </div>
    )
  }
}

export default App;