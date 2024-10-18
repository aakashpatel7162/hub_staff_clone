import React, { useEffect, useState } from 'react';
import './activity.style.css'; 

const Stopwatch = ({ start }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 100);
      }, 100);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  useEffect(() => {
    if (start) {
      setIsRunning(true);
    }
  }, [start]);

  const formatTime = (time) => {
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time % 1000) / 100);
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${milliseconds}`;
  };

  return (
    <div className="stopwatch">
      <h2>User Tracker</h2>
      <div className="time">{formatTime(time)}</div>
    </div>
  );
};

const StopWatch = () => {
  const [user, setUser] = useState(null);
  const [startStopwatch, setStartStopwatch] = useState(false);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setUser(userData);
      setStartStopwatch(true); 
    }
  }, []);

  return (
    <div>
      {startStopwatch && <Stopwatch start={startStopwatch} />}
    </div>
  );
};

export default StopWatch;
