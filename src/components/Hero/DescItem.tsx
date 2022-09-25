import React from "react";

interface DescItemProps {
  image: string;
  desc: string;
}

const DescItem: React.FC<DescItemProps> = ({ image, desc }) => {
  return (
    <div className="desc-item">
      <img className="desc-item-image" src={image} alt="" />
      <p>{desc}</p>
    </div>
  );
};

export default DescItem;
