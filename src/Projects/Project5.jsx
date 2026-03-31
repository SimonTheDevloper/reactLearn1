import { useEffect, useRef, useState } from "react";
import CounterBtn from "./CounterBtn.jsx";
import CustomBtnPopUp from "./CustomBtnPopUp.jsx";
import { evaluate } from "mathjs";

function Project5() {
  const [count, setCount] = useState(() => {
    const gespeichert = localStorage.getItem("count");
    return gespeichert !== null ? Number(gespeichert) : 0;
  });
  const [amount, setAmount] = useState(1);
  const amountRef = useRef(amount);

  const [error, setError] = useState(null);

  const [customBtns, setCustomBtns] = useState([]);
  const [newLabel, setNewLabel] = useState("");
  const [newValue, setNewValue] = useState(null);
  const [showCustomBtnPopUp, setShowCustomBtnPopUp] = useState(false);
  const maxLimitAmount = 100;

  useEffect(() => {
    amountRef.current = amount;
  }, [amount]);
  useEffect(() => {
    // fürt das bei jeder count änderung aus
    localStorage.setItem("count", count);
  }, [count]);
  const staticBtns = [
    { label: "+", action: () => setCount((a) => a + amountRef.current) },
    { label: "-", action: () => setCount((a) => a - amountRef.current) },
    { label: "reset", action: () => setCount(0) },
    { label: "+10", action: () => setCount((a) => a + 10) },
    { label: "-10", action: () => setCount((a) => a - 10) },
    { label: "x 10", action: () => setCount((a) => a * 10) },
    { label: "/ 10", action: () => setCount((a) => a / 10) },
    {
      label: "random",
      action: () => setCount(Math.floor(Math.random() * 100)),
    },
    { label: "half", action: () => setCount((a) => a / 2) },
    { label: "abs", action: () => setCount((a) => Math.abs(a)) }, // war "round off"
    { label: "round", action: () => setCount((a) => Math.round(a)) }, // neu: nächste Ganzzahl
    { label: "round up", action: () => setCount((a) => Math.ceil(a)) },
    { label: "round down", action: () => setCount((a) => Math.floor(a)) }, // neu
    { label: "10%", action: () => setCount((a) => a * 0.1) },
  ];

  const addEigenenBtn = () => {
    const newBtn = {
      label: newLabel,
      action: () =>
        setCount((a) => {
          try {
            // Rechnet z.B. "5 * 12" mit mathjs
            return evaluate(`${a} ${newValue}`);
          } catch (err) {
            console.error("Ungültige Mathe-Eingabe:", newValue);
            return a; // Wenn es ein Fehler war, bleibt der Wert gleich
          }
        }),
    };
    setCustomBtns((prev) => [...prev, newBtn]);
    setShowCustomBtnPopUp(false);
    setNewLabel("");
    setNewValue("");
  };

  const handleOnChange = (e) => {
    const value = Number(e.target.value);

    if (value > maxLimitAmount) {
      setError(`Stop! max Amount is ${maxLimitAmount}`);
      setAmount(maxLimitAmount);
    } else {
      setError("");
      setAmount(value);
    }
  };

  const allBtns = [...staticBtns, ...customBtns];

  return (
    <main className="prot5 projectBox">
      <div className="counter">
        <p>
          Your Count is: <span>{count}</span>
        </p>

        <div className="buttons">
          {allBtns.map((item, index) => (
            <CounterBtn key={index} text={item.label} onClick={item.action} />
          ))}
          <button
            className="addCustomBtn"
            onClick={() => setShowCustomBtnPopUp(true)}
          >
            add Custom Button
          </button>
        </div>
        {showCustomBtnPopUp && (
          <CustomBtnPopUp
            newLabel={newLabel}
            setNewLabel={setNewLabel}
            newValue={newValue}
            setNewValue={setNewValue}
            onSave={addEigenenBtn}
            onCancel={() => setShowCustomBtnPopUp(false)}
          />
        )}

        <div className="amount">
          <p>Step size:</p>
          <input type="number" value={amount} onChange={handleOnChange} />
          {error && <p>{error}</p>}
        </div>
      </div>
    </main>
  );
}

export default Project5;
