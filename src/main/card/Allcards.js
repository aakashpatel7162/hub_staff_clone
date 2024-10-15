import React from 'react';
import Card from './Card';

export default function Allcards() {
  const cardsData = [
    {
      title: "Card Title 1",
      description: "This is a description for card 1.",
      imageUrl: "https://via.placeholder.com/300" // Replace with your image URL
    },
    {
      title: "Card Title 2",
      description: "This is a description for card 2.",
      imageUrl: "https://via.placeholder.com/300" // Replace with your image URL
    },
    {
      title: "Card Title 3",
      description: "This is a description for card 3.",
      imageUrl: "https://via.placeholder.com/300" // Replace with your image URL
    },
  ];

  return (
    <div className="home">
      <h1>Welcome to Our Homepage</h1>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card 
            key={index} 
            title={card.title} 
            description={card.description} 
            imageUrl={card.imageUrl} 
          />
        ))}
      </div>
    </div>
  );
}
