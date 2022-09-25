import React from "react";
import "./FeaturesSection.modules.css";

const FeaturesSection: React.FC<any> = () => {
  return (
    <div className="features-section">
      <div className="features-section-buttons">
        <button>SCI-FI</button>
        <button>Nature</button>
        <button className="gaming">Gaming</button>
        <button>Drive</button>
      </div>
    </div>
  );
};

export default FeaturesSection;
