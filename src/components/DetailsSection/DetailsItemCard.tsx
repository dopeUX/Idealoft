import React from "react";

interface DetailsItemCardProps {
  image: string;
  desc: string;
}

const DetailsItemCard: React.FC<DetailsItemCardProps> = ({ image, desc }) => {
  return (
    <div className="details-image-card">
      <img src={image} alt="" />
      <p>{desc}</p>
    </div>
  );
};

export default DetailsItemCard;
