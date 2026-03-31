import { useState } from "react";
import { evaluate } from "mathjs";

const ErlaupteOperatoren = [
  { op: "+5", desc: "add" },
  { op: "-3", desc: "subtract" },
  { op: "*2", desc: "multiply" },
  { op: "/4", desc: "divide" },
  { op: "**2", desc: "power" },
  { op: "% 100", desc: "modulo" },
];

function CustomBtnPopUp({
  newLabel,
  newValue,
  setNewLabel,
  setNewValue,
  onSave,
  onCancel,
}) {
  const [inputError, setInputError] = useState("");

  const validate = (val) => {
    if (!val.trim()) {
      setInputError("");
      return;
    }
    try {
      const result = evaluate(`10 ${val}`);
      if (typeof result !== "number" || !isFinite(result)) throw new Error();
      setInputError("");
    } catch {
      setInputError("Invalid use e.g. +5, *2 or /4");
    }
  };

  const handleValueChange = (e) => {
    setNewValue(e.target.value);
    validate(e.target.value);
  };

  const handleChipClick = (op) => {
    setNewValue(op);
    validate(op);
  };

  const canSave =
    !inputError && newValue?.trim() !== "" && newLabel?.trim() !== "";

  return (
    <div className="customBtnPopUp-overlay">
      <div className="customBtnPopUp-content">
        <div className="popup-header">
          <p className="popup-title">Create Button</p>
          <p className="popup-subtitle">Enter a name and choose an operator</p>
        </div>

        <div className="popup-fields">
          <div className="popup-field">
            <label className="popup-label">Button name</label>
            <input
              type="text"
              placeholder="e.g. Double"
              value={newLabel}
              onChange={(e) => setNewLabel(e.target.value)}
            />
          </div>

          <div className="popup-field">
            <label className="popup-label">
              Action <em className="popup-label-hint">(operator + number)</em>
            </label>
            <input
              type="text"
              placeholder="e.g. +67 or *2"
              value={newValue}
              onChange={handleValueChange}
              className={inputError ? "popup-input-error" : ""}
            />
            {inputError && <p className="popup-error-msg">{inputError}</p>}
          </div>
        </div>

        <div className="ops-hint">
          <p className="ops-hint-title">Allowed operators click to apply</p>
          <div className="ops-grid">
            {ErlaupteOperatoren.map(({ op, desc }) => (
              <button
                key={op}
                className={`ops-chip${newValue === op ? " ops-chip-active" : ""}`}
                onClick={() => handleChipClick(op)}
                type="button"
              >
                <code>{op}</code>
                <em>{desc}</em>
              </button>
            ))}
          </div>
        </div>

        <p className="ops-sub">
          The current counter value is automatically prepended.
        </p>

        <div className="customBtnPopUp-actions">
          <button className="cancelBtn" onClick={onCancel}>
            Cancel
          </button>
          <button
            className="saveBtn"
            onClick={canSave ? onSave : undefined}
            disabled={!canSave}
          >
            Save button
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomBtnPopUp;
