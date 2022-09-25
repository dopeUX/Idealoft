import React from "react";
import "./ProductItemCard.css";

interface ProductItemCardProps {
  image: string;
  title: string;
}

const ProductItemCard: React.FC<ProductItemCardProps> = ({ image, title }) => {
  return (
    <div className="product-item-card li">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>Learn more &gt;</p>
    </div>
  );
};

export default ProductItemCard;
