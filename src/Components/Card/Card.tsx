import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  price: string;
  description: string;
  bullets: string[];  
}

function Card({ title, price, description, bullets }: CardProps) {
  return (
    <div className="custom-card">
      <h2 className="card-title">{title}</h2>
      <h3 className="card-price">{price}</h3>
      <div className="card-description">{description}</div>
      <ul className="card-bullets">
        {bullets.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
      
    </div>
  );
};

export default Card;
