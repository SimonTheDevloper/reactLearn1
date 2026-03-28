import { useState } from "react";
function LocationCard({ fetchWeather }) {
  const [city, setCity] = useState("");
  return (
    <div className="Project10locationCard">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => fetchWeather(city)}>Get Weather</button>
    </div>
  );
}
export default LocationCard;
