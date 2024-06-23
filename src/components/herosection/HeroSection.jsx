import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.hero_section_container}>
      <div className={styles.hero_section_text}>
        <div className={styles.hero_subtitle}>Web design masterpiece</div>
        <h1 className={styles.hero_title}>
          Create amazing 3-column scroll animations in Webflow
        </h1>
        <p className={styles.hero_description}>
          Learn how to create a engaging three-column scroll animation with
          Webflow. Jonas Arleth guides you through inspiration, sticky elements,
          flexbox image positioning and fine-tuned animations. Inspired by:{" "}
          <a
            href="https://aim.obys.agency"
            target="_blank"
            className={styles.hero_description_link}
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
