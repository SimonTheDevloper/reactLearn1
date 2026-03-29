import { useState } from "react";

function Project6() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [shipping, setShipping] = useState("Pick Up");
  const [items, setItems] = useState([]);

  function addItem() {
    if (name.trim() === "" || quantity < 1) return;

    const newItem = {
      id: Date.now(),
      name: name.trim(),
      quantity: quantity,
      shipping: shipping,
    };

    setItems((prev) => [...prev, newItem]); // prev steht für previous state alspo der State von davor
    setName("");
    setQuantity(1);
  }

  function deleteItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="Project6container projectBox">
      <h2> Order Manager</h2>

      <div className="Project6form">
        <input
          type="text"
          placeholder="Enter Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <div className="Project6radio-group">
          <label>
            <input
              type="radio"
              value="Pick Up"
              checked={shipping === "Pick Up"}
              onChange={(e) => setShipping(e.target.value)}
            />
            Pick Up
          </label>

          <label>
            <input
              type="radio"
              value="Delivery"
              checked={shipping === "Delivery"}
              onChange={(e) => setShipping(e.target.value)}
            />
            Delivery
          </label>
        </div>

        <button onClick={addItem}>Add</button>
      </div>

      <hr />
      <h3>Your List:</h3>

      <ul className="Project6list">
        {items.map((item) => (
          <li key={item.id} className="Project6list-item">
            <span>
              <strong>{item.name}</strong> ({item.quantity}x)
              <br />
              <small>Shipping: {item.shipping}</small>
            </span>

            <button className="delete" onClick={() => deleteItem(item.id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Project6;
