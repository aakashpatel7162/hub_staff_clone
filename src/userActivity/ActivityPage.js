import React from 'react';
import StopWatch from './Stopwatch'; 
import ActivityTable from './ActivityTable'; 
import './activity.style.css'; 

const ActivityPage = () => {
  return (
    <div className="user_tablemain">
      <div className="stopwatch-container">
        <StopWatch />
      </div>
      <div className="activity-table-container">
        <ActivityTable />
      </div>
    </div>
  );
};

export default ActivityPage;
