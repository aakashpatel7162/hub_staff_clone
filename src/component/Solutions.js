import React from 'react';
import './product.style.css'; // Import your CSS file for styling

const Solutions = () => {
  const solutions = [
    {
      title: "User Data Tracking",
      description: "Track user activities seamlessly to ensure optimal engagement and productivity.",
      imageUrl: "https://source.unsplash.com/featured/?data", // Placeholder image
    },
    {
      title: "Time Management",
      description: "Manage and analyze time spent on tasks to improve efficiency and workflow.",
      imageUrl: "https://source.unsplash.com/featured/?time", // Placeholder image
    },
    {
      title: "Reporting & Analytics",
      description: "Generate comprehensive reports to assess performance and make data-driven decisions.",
      imageUrl: "https://source.unsplash.com/featured/?report", // Placeholder image
    },
    {
      title: "User Insights",
      description: "Gain insights into user behavior to tailor experiences and improve satisfaction.",
      imageUrl: "https://source.unsplash.com/featured/?insights", // Placeholder image
    },
  ];

  return (
    <div className="solutions-container">
      <h2>Our Solutions</h2>
      <div className="solutions-grid">
        {solutions.map((solution, index) => (
          <div className="solution-card" key={index}>
            <img src={solution.imageUrl} alt={solution.title} />
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
