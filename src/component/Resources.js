import React from 'react';
import './product.style.css'; // Import CSS for styling

const Resources = () => {
  return (
    <div className="resources-section">
      <h2>Resources</h2>
      <p>Explore our collection of resources to help you manage your data and time effectively.</p>
      <div className="resources-links">
        <a href="/resource1" className="resource-link">Resource 1</a>
        <a href="/resource2" className="resource-link">Resource 2</a>
        <a href="/resource3" className="resource-link">Resource 3</a>
      </div>
    </div>
  );
};

export default Resources;
