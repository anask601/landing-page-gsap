import React, { useEffect, useState } from "react";
import "./ProfileSection.css";
import { gsap } from "gsap";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const ProfileSection = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      const querySnapshot = await getDocs(collection(db, "profile"));
      const profiles = querySnapshot.docs.map((doc) => doc.data());
      setProfileData(profiles[0]);
    };

    fetchProfileData();
  }, []);

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
            Hi <span className="waving-hand">👋</span>
            {profileData?.title}
          </h3>
          <div className="description_content_wrap">
            <p className="description_content">
              {profileData?.description}&nbsp;
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
