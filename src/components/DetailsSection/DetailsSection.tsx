import React from "react";
import detailItems from "./detailItems";
import DetailsItemCard from "./DetailsItemCard";
import "./DetailsSection.css";

const DetailsSection: React.FC<any> = () => {
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet turpis sit amet lacinia feugiat. Cras a sapien a augue tempor sollicitudin sed ac nibh.";
  return (
    <section className="details-section">
      <h2>More about equitek!</h2>

      <div className="detail-items-section">
        {detailItems.map((item, index) => {
          return (
            <DetailsItemCard image={item.image} desc={item.desc} key={index} />
          );
        })}
      </div>
    </section>
  );
};

export default DetailsSection;
