import { useState } from "react";

function Project9() {
  const [current, setCurrent] = useState("0");
  const [prev, setPrev] = useState(null);
  const [operator, setOperator] = useState(null);
  const [fresh, setFresh] = useState(false);
  const [expr, setExpr] = useState("");

  const fmt = (n) => {
    const s = parseFloat(n.toPrecision(10)).toString();
    return s.length > 12 ? n.toExponential(4) : s;
  };

  const handleNum = (d) => {
    setCurrent((c) => (fresh || c === "0" ? d : c + d));
    setFresh(false);
  };

  const handleDot = () => {
    if (!current.includes(".")) setCurrent((c) => (fresh ? "0." : c + "."));
    setFresh(false);
  };

  const handleOp = (op) => {
    const sym = { "*": "x", "/": "÷", "+": "+", "-": "-" }[op];
    const val = parseFloat(current);
    setPrev(val);
    setOperator(op);
    setFresh(true);
    setExpr(`${fmt(val)} ${sym}`);
  };

  const calc = (a, op, b) => {
    if (op === "+") return a + b;
    if (op === "-") return a - b;
    if (op === "*") return a * b;
    if (op === "/") return b === 0 ? null : a / b;
  };

  const handleEquals = () => {
    if (!operator || prev === null) return;
    const b = parseFloat(current);
    const result = calc(prev, operator, b);
    const sym = { "*": "x", "/": "÷", "+": "+", "-": "-" }[operator];
    setExpr(`${fmt(prev)} ${sym} ${fmt(b)} =`);
    setCurrent(result === null ? "Fehler" : fmt(result));
    setPrev(null);
    setOperator(null);
    setFresh(true);
  };

  const handleClear = () => {
    setCurrent("0");
    setPrev(null);
    setOperator(null);
    setFresh(false);
    setExpr("");
  };

  const handleSign = () => setCurrent((c) => fmt(parseFloat(c) * -1));

  const handlePercent = () => setCurrent((c) => fmt(parseFloat(c) / 100));

  return (
    <div className="Project9container">
      <div className="Project9screen">
        <div className="Project9expr">{expr}</div>
        <div className="Project9result">{current}</div>
      </div>

      <div className="Project9grid">
        <button className="Project9key action" onClick={handleClear}>
          C
        </button>
        <button className="Project9key action" onClick={handleSign}>
          +/-
        </button>
        <button className="Project9key action" onClick={handlePercent}>
          %
        </button>
        <button className="Project9key op" onClick={() => handleOp("/")}>
          ÷
        </button>

        {[7, 8, 9].map((n) => (
          <button
            key={n}
            className="Project9key"
            onClick={() => handleNum(String(n))}
          >
            {n}
          </button>
        ))}
        <button className="Project9key op" onClick={() => handleOp("*")}>
          x
        </button>

        {[4, 5, 6].map((n) => (
          <button
            key={n}
            className="Project9key"
            onClick={() => handleNum(String(n))}
          >
            {n}
          </button>
        ))}
        <button className="Project9key op" onClick={() => handleOp("-")}>
          -
        </button>

        {[1, 2, 3].map((n) => (
          <button
            key={n}
            className="Project9key"
            onClick={() => handleNum(String(n))}
          >
            {n}
          </button>
        ))}
        <button className="Project9key op" onClick={() => handleOp("+")}>
          +
        </button>

        <button className="Project9key zero" onClick={() => handleNum("0")}>
          0
        </button>
        <button className="Project9key" onClick={handleDot}>
          .
        </button>
        <button className="Project9key eq" onClick={handleEquals}>
          =
        </button>
      </div>
    </div>
  );
}

export default Project9;
