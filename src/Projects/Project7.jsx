import { useState } from "react";

function Project7() {
  const [car, setCar] = useState({ year: 1999, make: "Quile", model: "cargo" });

  function handleYearChange(e) {
    setCar({ year: 2025 });
  }
  function handleMakeChange(e) {}
  function handleModelChange(e) {}
  return (
    <div>
      <p>
        Your favororite car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />{" "}
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} /> <br />
      <input type="text" value={car.model} onChange={handleModelChange} />{" "}
      <br />
    </div>
  );
}
export default Project7;
