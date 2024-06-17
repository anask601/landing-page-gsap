import React from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const links = [
    {
      href: "https://webflow.partnerlinks.io/column-image-scroll-animation",
      text: "Clone this site",
    },
    {
      href: "https://youtu.be/6rFm85ROcJg",
      text: "Tutorial",
    },
    {
      href: "https://jonasarleth.com/projekte",
      text: "My Portfolio",
    },
  ];

  const moreTutorialsLink = {
    href: "https://formburg.com",
    text: "More tutorials",
  };
  return (
    <nav className={styles.nav_content}>
      <div className={styles.nav_outer}>
        <div className={styles.nav_inner}>
          <div className={styles.nav_left}>
            {links.map((link, index) => (
              <div key={index} className="link-wrapper">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta_link"
                >
                  {link.text}
                </a>
              </div>
            ))}
          </div>
          <div className={styles.nav_right}>
            <div className="link-wrapper">
              <a
                href={moreTutorialsLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.more_link_text}
              >
                {moreTutorialsLink.text}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
