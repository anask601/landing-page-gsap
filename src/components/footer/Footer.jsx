import React from "react";
import styles from "./Footer.module.css";
import ProfileSection from "../profilesection/ProfileSection";

const Footer = () => {
  return (
    <footer className={styles.container_footer}>
      <div className={styles.footer_content}>
        <ProfileSection />
      </div>
    </footer>
  );
};

export default Footer;
