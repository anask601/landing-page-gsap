import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CardSection.css";

gsap.registerPlugin(ScrollTrigger);

const CardSection = () => {
  const scrollInnerRef = useRef(null);

  useEffect(() => {
    gsap.to(scrollInnerRef.current, {
      width: "33vw",
      scrollTrigger: {
        trigger: scrollInnerRef.current,
        start: "top end",
        end: "bottom top",
        scrub: true,
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top end",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(".img_1", {
      duration: 3,
      willChange: "transform",
      transform: `translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
      transformStyle: "preserve-3d",
    })
      .to(
        ".img_2",
        {
          duration: 2,
          willChange: "transform",
          transform: `translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          transformStyle: "preserve-3d",
        },
        "-=0.5"
      )
      .to(
        ".img_3",
        {
          duration: 1,
          willChange: "transform",
          transform: `translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          transformStyle: "preserve-3d",
        },
        "-=0.5"
      )
      .to(
        ".text_1",
        {
          ease: "power1.inOut",
          willChange: "transform",
          transform: `translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          transformStyle: "preserve-3d",
        },
        "-=0.1"
      )
      .to(
        ".text_2",
        {
          ease: "power1.inOut",
          willChange: "transform",
          transform: `translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          transformStyle: "preserve-3d",
        },
        "-=0.1"
      )
      .to(
        ".scroll_content_description",
        {
          willChange: "opacity",
          opacity: "1",
        },
        "-=0.5"
      );
  }, []);

  return (
    <div className="image_scroll_container">
      <div className="image_wrapper_content">
        <div className="image_wrapper_scroll">
          <div
            className="image_wrapper_scroll_inner "
            style={{
              willChange: "width, height",
              width: "100vw",
              height: "100%",
            }}
            ref={scrollInnerRef}
          >
            <div
              className="image_wrap img_3"
              style={{
                willChange: "transform",
                transform:
                  "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src="https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f83c0434acd4d6dc7480a3_image2.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 100vw, 33vw"
                srcSet="https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f83c0434acd4d6dc7480a3_image2-p-500.jpg 500w, https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f83c0434acd4d6dc7480a3_image2-p-800.jpg 800w, https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f83c0434acd4d6dc7480a3_image2-p-1080.jpg 1080w, https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f83c0434acd4d6dc7480a3_image2.jpg 1500w"
                alt=""
                className="image_item"
              />
            </div>
            <div
              className="image_wrap img_2"
              style={{
                willChange: "transform",
                transform:
                  "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src="https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f83c041b98e32226866bbb_image1.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 100vw, 33vw"
                srcSet="https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f83c041b98e32226866bbb_image1-p-500.jpg 500w, https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f83c041b98e32226866bbb_image1-p-800.jpg 800w, https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f83c041b98e32226866bbb_image1-p-1080.jpg 1080w, https://assets-global.website-files.com/65f83352d44ce1910698e01e/65f83c041b98e32226866bbb_image1.jpg 1500w"
                alt=""
                className="image_item"
              />
            </div>
            <div
              className="image_wrap img_1"
              style={{
                willChange: "transform",
                transform:
                  "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
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
            <div
              className="scroll_content_title text_1"
              style={{
                willChange: "transform",
                transform:
                  "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              Welcome
            </div>
          </div>
          <div className="hidden">
            <div
              className="scroll_content_title text_2"
              style={{
                willChange: "transform",
                transform:
                  "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              to Mars
            </div>
          </div>
          <div
            className="scroll_content_description"
            style={{
              willChange: "opacity",
              opacity: 0,
            }}
          >
            <p className="scroll_content_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>

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
