import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero_section_container">
      <div className="hero_section_text">
        <div className="hero_subtitle">Web design masterpiece</div>
        <h1 className="hero_title">
          Create amazing 3-column scroll animations in Webflow
        </h1>
        <p className="hero_description">
          Learn how to create a engaging three-column scroll animation with
          Webflow. Jonas Arleth guides you through inspiration, sticky elements,
          flexbox image positioning and fine-tuned animations. Inspired by:{" "}
          <a
            href="https://aim.obys.agency"
            target="_blank"
            className="hero_description_link"
          >
            https://aim.obys.agency
          </a>
        </p>
        <a href="#3-column-scroll-start" className="cta_link is_large">
          Scroll Down
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
