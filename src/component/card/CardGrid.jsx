import React from "react";
import Card from "./Card";
import "./Card.css";

const cardData = [
  {
    title: "Beach Paradise",
    image: "https://picsum.photos/id/1011/400/200",
    description: "Relax by the blue waters and golden sand.",
  },
  {
    title: "Mountain Peaks",
    image: "https://picsum.photos/id/1015/400/200",
    description: "Explore the heights of nature’s beauty.",
  },
  {
    title: "City Nights",
    image: "https://picsum.photos/id/1016/400/200",
    description: "Experience the glow of urban life.",
  },
  {
    title: "Forest Trail",
    image: "https://picsum.photos/id/1018/400/200",
    description: "Walk through peaceful green paths.",
  },
];

const CardGrid = () => {
  return (
    <div className="card-grid">
      {cardData.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default CardGrid;
