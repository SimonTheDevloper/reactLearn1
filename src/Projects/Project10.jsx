import { useState } from "react";
import LocationCard from "./LocationCard.jsx";
import WeatherCard from "./WeatherCard.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
import FeedbackMsgCard from "./FeedbackMsgCard.jsx";

function Project10() {
  const [data, setData] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [feedBackMsg, setFeedBackMsg] = useState(null);

  const fetchWeather = async (stadt) => {
    try {
      setLoadingStatus(true);
      setData(null);
      const koordsResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(stadt)}&language=de`,
      );
      const koordsData = await koordsResponse.json();

      if (!koordsData.results || koordsData.results.length === 0) {
        setFeedBackMsg("City not found!");
        setLoadingStatus(false);
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
      setLoadingStatus(false);
    } catch (error) {
      setLoadingStatus(false);
      setFeedBackMsg("Failed to load data. Please try it again.");
      console.error("Fehler beim Laden der Daten:", error);
    }
  };
  return (
    <div className="Project10container projectBox">
      <LocationCard fetchWeather={fetchWeather} />
      {loadingStatus === true && <LoadingSpinner />}
      {feedBackMsg ? (
        <FeedbackMsgCard content={feedBackMsg} />
      ) : data ? (
        <WeatherCard weather={data} />
      ) : (
        <FeedbackMsgCard content="You haven't gotten the weather for a city yet. Please search for a city to see the weather." />
      )}
    </div>
  );
}
export default Project10;
