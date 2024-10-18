import React from 'react';
import './product.style.css'; 
import data from '../constant/data';
const Resources = () => {
  return (
    <div className="resources-section">
      <h2>Resources</h2>
      <p>Explore our collection of resources to help you manage your data and time effectively.</p>
      <div className="resources-links">
       {data.resource}
      </div>
    </div>
  );
};

export default Resources;
