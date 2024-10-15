import React from 'react';
import './product.style.css'; // Import CSS for styling

const products = [
  {
    id: 1,
    title: 'Time Tracking',
    description: 'Effortlessly track time and productivity with our intuitive time tracking tool. Monitor your hours, generate reports, and improve efficiency.',
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URLs
  },
  {
    id: 2,
    title: 'Task Management',
    description: 'Organize your tasks and projects seamlessly. Prioritize your workload and collaborate with your team effectively.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    title: 'Team Collaboration',
    description: 'Enhance team communication and collaboration with our platform. Share files, discuss ideas, and work together in real-time.',
    imageUrl: 'https://via.placeholder.com/300',
  },
];

export default function ProductSection() {
  return (
    <div className="product-section">
      <h2>Our Products</h2>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
