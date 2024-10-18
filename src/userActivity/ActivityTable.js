import React, { useEffect, useState } from 'react';
import './activity.style.css';
import StopWatch from './Stopwatch'
const ActivityTable = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const storedActivities = JSON.parse(localStorage.getItem("userActivities")) || [];
    setActivities(storedActivities);
  }, []);

  return (
<div className='user_tablemain'>
    <div>
    <StopWatch/>
    </div>
    <div className="activity-table-container">

      <h2>User Activities</h2>
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>X</th>
            <th>Y</th>
            <th>Timestamp</th>
            <th>Snapshot</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index}>
              <td>{activity.action}</td>
              <td>{activity.x !== undefined ? activity.x : "-"}</td>
              <td>{activity.y !== undefined ? activity.y : "-"}</td>
              <td>{new Date(activity.timestamp).toLocaleString()}</td>
              <td>
                {activity.action === "screenshot" && activity.snapshot && (
                  <img src={activity.snapshot} alt="Snapshot" width="100" height="auto" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ActivityTable;
