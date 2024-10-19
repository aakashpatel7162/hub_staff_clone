import React, { useEffect, useState } from 'react';
import './activity.style.css'; 

const StopWatch = () => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      const loginTime = userData.loginTime; 
      const currentTime = Date.now();
      const totalElapsedTime = Math.floor((currentTime - loginTime) / 1000); 
      setElapsedTime(totalElapsedTime);
    }
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="stopwatch">
      <h2>User Tracker</h2>
      <div className="time">{formatTime(elapsedTime)}</div>
    </div>
  );
};

export default StopWatch;
