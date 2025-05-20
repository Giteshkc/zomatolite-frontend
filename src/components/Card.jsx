
import React from "react";
import "./Card.css";

export function Card({ image, name, cuisine, location }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />
      <CardContent name={name} cuisine={cuisine} location={location} />
    </div>
  );
}

export function CardContent({ name, cuisine, location }) {
  return (
    <div className="card-content">
      <h3 className="card-title">{name}</h3>
      <p className="card-info">{cuisine} - {location}</p>
    </div>
  );
}
