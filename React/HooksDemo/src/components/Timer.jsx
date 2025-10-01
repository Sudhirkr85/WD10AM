import { useEffect, useState } from "react";

function Timer() {
  const [second, setSecond] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning && intervalId === null) {
      const id = setInterval(() => {
        setSecond((second) => second + 1);
      }, 100);
      setIntervalId(id);
    }

    if (intervalId && !isRunning) {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning, intervalId]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSecond(0);
  };

  return (
    <>
      <p>Second: {second}</p>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
}
export default Timer;
