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

  const setPreset = (min) => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTotalSeconds(min * 60);
    setSeconds(min * 60);
  };

  const progress = totalSeconds > 0 ? (seconds / totalSeconds) * 100 : 0;

  return (
    <div>
      <div>
        {PRESETS.map((min) => (
          <button key={min} onClick={() => setPreset(min)}>
            {min} min
          </button>
        ))}
      </div>

      <h1>{fmt(seconds)}</h1>
      {seconds === 0 && <p>Zeit ist um!</p>}

      <progress value={progress} max={100} />

      <div>
        <button onClick={() => setIsRunning(true)} disabled={seconds === 0}>
          Start
        </button>
        <button onClick={() => setIsRunning(false)}>Pause</button>
        <button
          onClick={() => {
            setSeconds(totalSeconds);
            setIsRunning(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Project8;
