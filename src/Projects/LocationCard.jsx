import { useState } from "react";
function LocationCard({ fetchWeather }) {
  const [city, setCity] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchWeather(city);
    }
  };
  return (
    <div className="Project10locationCard">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => fetchWeather(city)}>Get Weather</button>
    </div>
  );
}
export default LocationCard;
