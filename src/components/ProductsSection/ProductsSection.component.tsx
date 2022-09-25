import React from "react";
import "./products-section.modules.css";
import productItems from "./productItems";
import ProductItemCard from "../ProductItemCard/ProductItemCard";

const ProductsSection: React.FC<any> = () => {
  return (
    <div className="product-section">
      <div className="product-section-head">
        <h2>Products</h2>
        <div className="head-indicator"></div>
      </div>
      <section className="product-item-section">
        {productItems.map((item, index) => {
          return (
            <ProductItemCard key={index} image={item.image} title={item.name} />
          );
        })}
      </section>
    </div>
  );
};

export default ProductsSection;
