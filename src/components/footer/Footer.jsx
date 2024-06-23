import React from "react";
import styles from "./Footer.module.css";
import ProfileSection from "../profilesection/ProfileSection";
import FooterCard from "../footercard/FooterCard";
import FooterLink from "../footerlink/FooterLink";

const Footer = () => {
  return (
    <footer className={styles.container_footer}>
      <div className={styles.footer_content}>
        <ProfileSection />
        <FooterCard />
        <FooterLink />
      </div>
    </footer>
  );
};

export default Footer;
