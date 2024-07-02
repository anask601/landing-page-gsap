import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CardSection.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

gsap.registerPlugin(ScrollTrigger);

const createGsapTimeline = (createAnimation) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      start: "top end",
      end: "bottom top",
      scrub: true,
    },
  });

  const imageMovingToLeft = (number) => ({
    duration: number,
    willChange: "transform",
    transform: `translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
    transformStyle: "preserve-3d",
  });

  const textAnimation = () => ({
    ease: "power1.inOut",
    willChange: "transform",
    transform: `translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
    transformStyle: "preserve-3d",
  });
  const fadeIn = () => ({
    willChange: "opacity",
    opacity: "1",
  });
  createAnimation(tl, ".img_1", imageMovingToLeft(3));
  createAnimation(tl, ".img_2", imageMovingToLeft(2), "-=0.5");
  createAnimation(tl, ".img_3", imageMovingToLeft(1), "-=0.5");
  createAnimation(tl, ".text_1", textAnimation(), "-=0.1");
  createAnimation(tl, ".text_2", textAnimation(), "-=0.1");
  createAnimation(tl, ".scroll_content_description", fadeIn(), "-=0.5");

  return tl;
};

const createAnimation = (timeline, selector, properties, position = null) => {
  if (position) {
    timeline.to(selector, properties, position);
  } else {
    timeline.to(selector, properties);
  }
};

const CardSection = () => {
  const scrollInnerRef = useRef(null);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      const querySnapshot = await getDocs(collection(db, "scrollSection"));
      const profiles = querySnapshot.docs.map((doc) => doc.data());
      setProfileData(profiles[0]);
    };

    fetchProfileData();
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      gsap.to(scrollInnerRef.current, {
        width: "33vw",
        scrollTrigger: {
          trigger: scrollInnerRef.current,
          start: "top end",
          end: "bottom top",
          scrub: true,
        },
      });
    }
    createGsapTimeline(createAnimation);
  }, [scrollInnerRef]);

  return (
    <div className="image_scroll_container">
      <div className="image_wrapper_content">
        <div className="image_wrapper_scroll">
          <div className="image_wrapper_scroll_inner " ref={scrollInnerRef}>
            <div className="image_wrap img_3">
              <img
                src="https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f83c0434acd4d6dc7480a3_image2.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 100vw, 33vw"
                srcSet="https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f83c0434acd4d6dc7480a3_image2-p-500.jpg 500w, https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f83c0434acd4d6dc7480a3_image2-p-800.jpg 800w, https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f83c0434acd4d6dc7480a3_image2-p-1080.jpg 1080w, https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f83c0434acd4d6dc7480a3_image2.jpg 1500w"
                alt=""
                className="image_item"
              />
            </div>
            <div className="image_wrap img_2">
              <img
                src="https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f83c041b98e32226866bbb_image1.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 100vw, 33vw"
                srcSet="https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f83c041b98e32226866bbb_image1-p-500.jpg 500w, https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f83c041b98e32226866bbb_image1-p-800.jpg 800w, https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f83c041b98e32226866bbb_image1-p-1080.jpg 1080w, https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f83c041b98e32226866bbb_image1.jpg 1500w"
                alt=""
                className="image_item"
              />
            </div>
            <div className="image_wrap img_1">
              <img
                src="https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f841832c1d01f760445b6a_image3.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 100vw, 33vw"
                srcSet="https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f841832c1d01f760445b6a_image3-p-500.jpg 500w, https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f841832c1d01f760445b6a_image3-p-800.jpg 800w, https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f841832c1d01f760445b6a_image3-p-1080.jpg 1080w, https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f841832c1d01f760445b6a_image3.jpg 1500w"
                alt=""
                className="image_item"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="scroll_text_container">
        <div className="scroll_content">
          <div className="hidden">
            <div className="scroll_content_title text_1">
              {profileData?.title1}
            </div>
          </div>
          <div className="hidden">
            <div className="scroll_content_title text_2">
              {profileData?.title2}
            </div>
          </div>
          <div className="scroll_content_description">
            <p className="scroll_content_text">{profileData?.desc}</p>

            <a href="#" className="button">
              Button Text
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
