function WeatherCard({ weather }) {
  return (
    <div className="weatherCard">
      <div className="temperatureCard">
        <h3>current temperature: {weather.current.temperature_2m}</h3>
      </div>
      <div className="atmosphereCard">
        <h3>Humidity: {weather.current.relative_humidity_2m}</h3>
      </div>
      <div className="windCard">
        <h3>windspeed: {weather.current.wind_speed_10m}</h3>
      </div>
    </div>
  );
}
export default WeatherCard;
