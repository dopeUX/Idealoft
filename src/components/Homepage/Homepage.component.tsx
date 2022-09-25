import React, { useState } from "react";
import HeroContainer from "../Hero/Hero.component";
import ProductsSection from "../ProductsSection/ProductsSection.component";
import "../../GlobalStyles/globalStyles.css";
import "./Homepage.modules.css";
import FeaturesSection from "../FeaturesSection/FeaturesSection";
import DetailsSection from "../FeaturesSection/DetailsSection/DetailsSection";
import Footer from "../Footer/Footer.component";

const HomePage: React.FC<any> = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="homepage">
      <HeroContainer />
      <ProductsSection />
      <img className="large-vr-image" src="assets/vr-image-large.svg" alt="" />

      <button
        className="explore-btn"
        onClick={() => {
          setActive(true);
        }}
      >
        Explore
      </button>
      {active && (
        <div>
          <FeaturesSection />
          <img className="gaming-image" src="assets/gaming-image.jpg" alt="" />
          <DetailsSection />
        </div>
      )}
    </div>
  );
};

export default HomePage;
