import React from 'react';
import './Card.css';

interface CardProps {
  image: string;
  description: string;
  bullets: string[];
  title: string;
}

function Card({ title, image, description, bullets }: CardProps) {
  return (
    <div className="custom-card">
      <h2 className="card-title">{title}</h2>
      <img src={image} alt="Card" className="card-image" />
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
