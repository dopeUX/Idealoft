import React from "react";
import DescItem from "./DescItem";
import "./Hero.modules.css";

const HeroContainer: React.FC<any> = () => {
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet turpis sit amet lacinia feugiat. Cras a sapien a augue tempor sollicitudin sed ac nibh.  ";

  return (
    <div className="hero-container">
      <section className="hero-top-section">
        <section className="hero-intro-section">
          <h1>The Next Big Thing!</h1>
          <p>Join us in our journey to find out the next step in technology</p>
        </section>

        <img className="hero-image" src="assets/hero-image.svg" alt="" />

        <div className="know-more-btn-section">
          <img className="arrow-mobile" src="assets/arrow-mobile.svg" alt="" />
          <button className="hero-btn">Know more</button>
          <img
            className="arrow-desktop"
            src="assets/arrow-desktop.svg"
            alt=""
          />
        </div>
      </section>
      <section className="desc-section">
        {Array(3)
          .fill(null)
          .map((x, i) => {
            return (
              <DescItem
                image={"assets/desc-icon" + (i + 1) + ".svg"}
                desc={desc}
              />
            );
          })}
      </section>
    </div>
  );
};

export default HeroContainer;
