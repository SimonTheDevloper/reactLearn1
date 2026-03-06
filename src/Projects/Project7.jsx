import { useState } from "react";

function Project7() {
  const [car, setCar] = useState({
    year: 2020,
    make: "Toyota",
    model: "Corolla",
    color: "red",
    km: 0,
  });

  const [saved, setSaved] = useState(null);

  function handleYearChange(e) {
    setCar({ ...car, year: e.target.value });
  }

  function handleMakeChange(e) {
    setCar({ ...car, make: e.target.value });
  }

  function handleModelChange(e) {
    setCar({ ...car, model: e.target.value });
  }

  function handleColorChange(e) {
    setCar({ ...car, color: e.target.value });
  }

  function handleKmChange(e) {
    setCar({ ...car, km: e.target.value });
  }

  function handleSave() {
    setSaved(car);
  }

  return (
    <div>
      <h2>Car Configurator</h2>
      <p>
        Your car: {car.year} {car.make} {car.model} Colour: {car.color}
        {car.km} km
      </p>
      <br />
      <label>Year of manufacture: </label>
      <input type="number" value={car.year} onChange={handleYearChange} />

      <br />
      <label>Manufacturer: </label>
      <select value={car.make} onChange={handleMakeChange}>
        <option>Toyota</option>
        <option>BMW</option>
        <option>Mercedes</option>
        <option>Ford</option>
        <option>Audi</option>
      </select>

      <br />

      <label>Model: </label>
      <input type="text" value={car.model} onChange={handleModelChange} />

      <br />

      <label>Color: </label>
      <select value={car.color} onChange={handleColorChange}>
        <option value="red">red</option>
        <option value="black">black</option>
        <option value="white">white</option>
        <option value="blue">blue</option>
        <option value="silver">silver</option>
      </select>

      <br />

      <label>mileage: </label>
      <input type="number" value={car.km} onChange={handleKmChange} />
      <span> km</span>

      <br />
      <br />

      <button onClick={handleSave}>save</button>

      <br />
      <br />

      {saved && (
        <div>
          <h3>Saved car:</h3>
          <p>Year: {saved.year}</p>
          <p>Hersteller: {saved.make}</p>
          <p>Model: {saved.model}</p>
          <p>Color: {saved.color}</p>
          <p>Mileage: {saved.km} km</p>
        </div>
      )}
    </div>
  );
}

export default Project7;
