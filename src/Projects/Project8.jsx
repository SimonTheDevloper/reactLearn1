import { useEffect, useRef, useState } from "react";

const PRESETS = [1, 5, 10, 15, 25];

function Project8() {
  const [totalSeconds, setTotalSeconds] = useState(600);
  const [seconds, setSeconds] = useState(600);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && seconds > 0) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const fmt = (s) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const progress = totalSeconds > 0 ? (seconds / totalSeconds) * 100 : 0;
  const barClass =
    progress > 50
      ? "Project8progress-bar"
      : progress > 20
        ? "Project8progress-bar warning"
        : "Project8progress-bar danger";

  const setPreset = (min) => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTotalSeconds(min * 60);
    setSeconds(min * 60);
  };

  const setCustom = (min, sec) => {
    const total = (parseInt(min) || 0) * 60 + (parseInt(sec) || 0);
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTotalSeconds(total);
    setSeconds(total);
  };

  return (
    <div className="Project8container projectBox">
      <div className="Project8display">
        <div
          className={`Project8time${seconds <= 10 && seconds > 0 ? " danger" : ""}`}
        >
          {fmt(seconds)}
        </div>
        {seconds === 0 && <p className="Project8done">Zeit ist um!</p>}
      </div>

      <div className="Project8progress-wrap">
        <div className={barClass} style={{ width: `${progress}%` }} />
      </div>

      <div className="Project8presets">
        {PRESETS.map((min) => (
          <button
            key={min}
            className={`Project8preset-btn${totalSeconds === min * 60 ? " active" : ""}`}
            onClick={() => setPreset(min)}
          >
            {min} min{min === 25 ? "" : ""}
          </button>
        ))}
      </div>

      <div className="Project8buttons">
        <button
          className="start-btn"
          onClick={() => setIsRunning((r) => !r)}
          disabled={seconds === 0}
        >
          {isRunning
            ? "Pause"
            : seconds < totalSeconds && seconds > 0
              ? "Weiter"
              : "Start"}
        </button>
        <button
          className="reset-btn"
          onClick={() => {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            setSeconds(totalSeconds);
          }}
        >
          Reset
        </button>
      </div>

      <div className="Project8custom">
        <label>Eigene Zeit:</label>
        <input
          type="number"
          min="0"
          max="99"
          defaultValue="10"
          onChange={(e) =>
            setCustom(e.target.value, document.getElementById("p8sec").value)
          }
        />
        <label>min</label>
        <input
          id="p8sec"
          type="number"
          min="0"
          max="59"
          defaultValue="0"
          onChange={(e) =>
            setCustom(
              document.getElementById("p8min")?.value ?? 10,
              e.target.value,
            )
          }
        />
        <label>sek</label>
      </div>
    </div>
  );
}

export default Project8;
