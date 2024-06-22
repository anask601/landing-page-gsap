import React from "react";
import "./ProfileSection.css";
import { gsap } from "gsap";

const ProfileSection = () => {
  const shakeHand = () => {
    console.log("Mouse entered, shaking hand");
    gsap.to(".waving-hand", {
      transform:
        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(60deg) skew(0deg, 0deg)",
      transformStyle: "preserve-3d",
      repeat: 3,
      yoyo: true,
      duration: 0.6,
    });
  };

  const resetHand = () => {
    console.log("Mouse Leave, shaking hand done");
    gsap.to(".waving-hand", {
      transform:
        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
      transformStyle: "preserve-3d",
    });
  };

  return (
    <section className="profile_section_container">
      <div className="profile_info_wrap">
        <div
          className="user_avatar_wrapper"
          onMouseEnter={shakeHand}
          onMouseLeave={resetHand}
        >
          <img
            src="https://assets.website-files.com/61694bf29835095fa2e3e46f/61695b50c6e29e00303bf4e7_jonas-arleth-avatar.jpg"
            loading="lazy"
            alt="Jonas Arleth Avatar"
            className="user_avatar_circle_img"
          />
          <div className="circle_flag"></div>
        </div>
        <div className="title_description_content_wrap">
          <h3 className="title">
            Hi <span className="waving-hand">👋</span> My name is Jonas Arleth
            and I’m a Webdesigner from Hamburg
          </h3>
          <div className="description_content_wrap">
            <p className="description_content">
              In addition to my work as a web designer, I help thousands of
              freelancers across Germany grow their web design business with my
              blog, podcast, and YouTube channel.&nbsp;
            </p>
          </div>
          <a
            className="portfolio_link"
            data-w-id="94e04c71-cc01-ad29-0019-917fa100c8f4"
            href="https://www.jonasarleth.com/projekte"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={shakeHand}
            onMouseLeave={resetHand}
          >
            <div className="link_txt">My Webdesign Portfolio</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
