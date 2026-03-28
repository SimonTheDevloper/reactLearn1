import { useState } from "react";
import LocationCard from "./LocationCard.jsx";
import WeatherCard from "./WeatherCard.jsx";

function Project10() {
  const [data, setData] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(true);

  const fetchWeather = async (stadt) => {
    try {
      const koordsResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(stadt)}&language=de`,
      );
      const koordsData = await koordsResponse.json();

      if (!koordsData.results || koordsData.results.length === 0) {
        console.error("Keine Stadt gefunden!");
        return;
      }

      const stadtLatitude = koordsData.results[0].latitude;
      const stadtLongitude = koordsData.results[0].longitude;

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${stadtLatitude}&longitude=${stadtLongitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`,
      );
      const weatherData = await weatherResponse.json();

      console.log(weatherData);
      setData(weatherData);
    } catch (error) {
      console.error("Fehler beim Laden der Daten:", error);
    }
  };
  return (
    <>
      <LocationCard fetchWeather={fetchWeather} />

      {data && <WeatherCard weather={data} />}
    </>
  );
}
export default Project10;
