function WeatherCard({ weather }) {
  return (
    <div className="Project10weatherCard">
      <div className="Project10weatherRow">
        <span className="Project10weatherLabel">Temperature</span>
        <span className="Project10weatherValue">
          {weather.current.temperature_2m} °C
        </span>
      </div>
      <div className="Project10weatherRow">
        <span className="Project10weatherLabel">Humidity</span>
        <span className="Project10weatherValue">
          {weather.current.relative_humidity_2m} %
        </span>
      </div>
      <div className="Project10weatherRow">
        <span className="Project10weatherLabel">Wind speed</span>
        <span className="Project10weatherValue">
          {weather.current.wind_speed_10m} km/h
        </span>
      </div>
    </div>
  );
}
export default WeatherCard;
