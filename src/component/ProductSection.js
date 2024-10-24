import React from 'react';
import './product.style.css';
import data from '../constant/data';

export default function ProductSection() {
  return (
    <div className="product-section">
      <h2 className="section-title">Our Products</h2>
      <div className="product-container">
        {data.products.map((product) => (
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
