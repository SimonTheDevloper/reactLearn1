import { useEffect, useRef, useState } from "react";

function Project8() {
  const [seconds, setSeconds] = useState(600);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && seconds > 0) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const generateTime = (totalSconds) => {
    const min = Math.floor(totalSconds / 60);
    const sec = totalSconds % 60;

    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`; // macht das es zb 05:05 ist statt 5:5
  };
  return (
    <>
      <div>
        <h1>{generateTime(seconds)}</h1>
        {seconds === 0 && <p>time's up</p>}
      </div>
      <div>
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Stop</button>
        <button
          onClick={() => {
            setSeconds(600);
            setIsRunning(false);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}
export default Project8;
