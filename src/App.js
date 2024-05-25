import React from 'react';
import './App.css';
import MainWeatherWindow from './Components/MainWeatherWindow';
import CityInput from './Components/CityInput';
import WeatherBox from './Components/WeatherBox';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <MainWeatherWindow test="test">
            <CityInput />
            <ul className='weather-box-list'>
              <li><WeatherBox/></li>
              <li><WeatherBox/></li>
              <li><WeatherBox/></li>
              <li><WeatherBox/></li>
              <li><WeatherBox/></li>
            </ul>
          </MainWeatherWindow>
        </header>
      </div>
    )
  }
}

export default App;