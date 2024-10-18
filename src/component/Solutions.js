import React from 'react';
import './product.style.css'; 
import data from '../constant/data';
const Solutions = () => {
 

  return (
    <div className="solutions-container">
      <h2>Our Solutions</h2>
      <div className="solutions-grid">
        {data.solutions.map((solution, index) => (
          <div className="solution-card" key={index}>
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
