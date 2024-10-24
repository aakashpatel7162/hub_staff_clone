import React, { useEffect, useState, useRef } from 'react';
import './activity.style.css';

const StopWatch = () => {
  // Load the initial value from localStorage (or default to 0 if not available)
  const initialElapsedTime = Number(localStorage.getItem('elapsedTime')) || 0;
  const initialIsRunning = localStorage.getItem('isRunning') === 'true';

  const [elapsedTime, setElapsedTime] = useState(initialElapsedTime); // Elapsed time from localStorage
  const [isRunning, setIsRunning] = useState(initialIsRunning); // Running state from localStorage
  const intervalRef = useRef(null); // Reference for the interval

  // Load state when the component mounts (only run once)
  useEffect(() => {
    const lastTimestamp = localStorage.getItem('lastTimestamp');

    // If the stopwatch was running and there's a last timestamp, calculate the time away
    if (isRunning && lastTimestamp) {
      const currentTime = Date.now();
      const timeDiff = Math.floor((currentTime - Number(lastTimestamp)) / 1000); // Time difference in seconds
      setElapsedTime(prevTime => prevTime + timeDiff); // Add the difference to the current elapsed time
    }
  }, [isRunning]);

  // Update localStorage whenever elapsedTime or isRunning changes
  useEffect(() => {
    localStorage.setItem('elapsedTime', elapsedTime);
    localStorage.setItem('isRunning', isRunning);

    if (isRunning) {
      localStorage.setItem('lastTimestamp', Date.now()); // Store current timestamp when running
    } else {
      localStorage.removeItem('lastTimestamp'); // Clear lastTimestamp if paused
    }
  }, [elapsedTime, isRunning]);

  // Update the elapsed time every second if the stopwatch is running
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 1); // Increment elapsed time by 1 second
      }, 1000);
    } else if (!isRunning && intervalRef.current) {
      clearInterval(intervalRef.current); // Clear the interval if paused
    }

    return () => clearInterval(intervalRef.current); // Cleanup on component unmount
  }, [isRunning]);

  // Toggle between pause and resume
  const handlePauseResume = () => {
    setIsRunning(!isRunning); // Toggle the running state
  };

  // Format time to hours, minutes, and seconds
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="stopwatch">
      <h2>User Tracker</h2>
      <div className="time">{formatTime(elapsedTime)}</div>
      <button onClick={handlePauseResume}>
        {elapsedTime==0?"Start":isRunning ? 'Pause' : 'Resume'}
      </button>
    </div>
  );
};

export default StopWatch;
