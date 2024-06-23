import React from "react";
import "./FooterCard.css";
import { gsap } from "gsap";

const FooterCard = () => {
  const shakeHand = (event) => {
    const target = event.currentTarget.querySelector(".card_inner_img_bg");
    gsap.to(target, {
      transform:
        "translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 0.9) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
      transformStyle: "preserve-3d",
      duration: 0.6,
    });
  };

  const resetHand = (event) => {
    const target = event.currentTarget.querySelector(".card_inner_img_bg");
    gsap.to(target, {
      transform:
        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
      transformStyle: "preserve-3d",
    });
  };
  return (
    <div className="footer_card_container">
      <div className="footer_cards">
        <a
          href="https://jonasarleth.com/youtube"
          target="_blank"
          className="card"
          onMouseEnter={shakeHand}
          onMouseLeave={resetHand}
        >
          <div className="card_inner">
            <div className="card_inner_img">
              <div className="card_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 36 26"
                >
                  <path
                    d="M18.7 0a263.76 263.76 0 0 1 7.27.14c1.44.05 2.74.12 3.91.2.84.1.96.1 1.4.22a5.48 5.48 0 0 1 2.7 1.56c.46.48.82 1.1 1.1 1.86.32.81.5 1.6.57 2.16l-1.22.17 1.23-.15a30.47 30.47 0 0 1 .17 1.74c.1 1.3.17 2.6.17 3.83v2.53a47.08 47.08 0 0 1-.35 5.59 10.4 10.4 0 0 1-.56 2.16 5.24 5.24 0 0 1-3.81 3.42c-.44.11-.56.13-1.31.2l-.15.02c-1.11.08-2.41.14-3.86.2a236.27 236.27 0 0 1-7.7.15h-.2a56.14 56.14 0 0 1-1.98-.02 404.9 404.9 0 0 1-4.2-.08 85.58 85.58 0 0 1-5.73-.29 64.8 64.8 0 0 1-1.07-.15c-.52-.1-1-.25-1.47-.47a5.2 5.2 0 0 1-1.58-1.12A5.25 5.25 0 0 1 .9 22a10.42 10.42 0 0 1-.62-2.67A54.15 54.15 0 0 1 0 14.26v-2.53a47.02 47.02 0 0 1 .35-5.6C.43 5.59.6 4.8.9 3.99A5.24 5.24 0 0 1 4.72.56c.44-.11.56-.13 1.31-.2l.15-.02C7.29.26 8.59.2 10.03.14A231.03 231.03 0 0 1 17.31 0h1.38Zm-.43 2.48h-.54a195.15 195.15 0 0 0-2.2.01c-1.84.03-3.69.07-5.4.13-1.42.05-2.7.11-3.72.18l-.12.02c-1.03.1-1.44.2-2.02.62-.16.12-.31.25-.48.42a3 3 0 0 0-.56 1 8.19 8.19 0 0 0-.47 2.05 51.67 51.67 0 0 0-.28 4.82v2.53A44.64 44.64 0 0 0 2.9 20c.09.4.2.78.33 1.13a3 3 0 0 0 .58 1.01c.25.26.53.46.84.6.49.23.76.28 1.81.41l.26.04c.95.1 2.78.17 5.23.23a402.49 402.49 0 0 0 5.99.1h.21a185.63 185.63 0 0 0 2.3-.02c1.85-.02 3.7-.06 5.42-.13 1.42-.05 2.69-.11 3.72-.19l.12-.01c1.03-.1 1.43-.2 2.01-.62.16-.11.32-.25.49-.42.18-.2.38-.54.56-1a8.19 8.19 0 0 0 .47-2.05 51.75 51.75 0 0 0 .28-4.82v-2.53a44.69 44.69 0 0 0-.32-5.21v-.06a7.65 7.65 0 0 0-.43-1.6 3 3 0 0 0-.58-1.01c-.15-.16-.3-.3-.47-.41-.58-.42-.98-.52-2-.62a99.67 99.67 0 0 0-3.84-.2 228.59 228.59 0 0 0-7.61-.14ZM15 7.62l8.1 4.7c.59.35.58.9 0 1.24l-8.38 4.87c-.59.34-1.06.06-1.06-.62V8.38c0-.85.59-1.2 1.34-.76Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="card_inner_img_bg youtube"></div>
            </div>
            <div className="card_inner_description">
              <p className="card_txt">Watch free Webflow tutorials</p>
            </div>
          </div>
        </a>
        <a
          href="https://webflow.com/jonasarleth"
          target="_blank"
          className="card"
          onMouseEnter={shakeHand}
          onMouseLeave={resetHand}
        >
          <div className="card_inner">
            <div className="card_inner_img">
              <div className="card_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <clipPath id="a">
                      <path
                        clipRule="evenodd"
                        d="M201.85-59.9 196-64.82v3.97h-16.15v1.93H196V-55l5.85-4.9z"
                      ></path>
                    </clipPath>
                  </defs>
                  <path
                    fillRule="evenodd"
                    d="M201.85-59.9 196-64.82v3.97h-16.15v1.93H196V-55l5.85-4.9z"
                  ></path>
                  <g clipPath="url(#a)">
                    <path d="M-997.15-6140.82h1440v8007h-1440z"></path>
                  </g>
                  <path
                    d="m17.1 9.78-1.66 5.15c0-.4-1.17-8.93-1.17-8.93-2.63 0-4 1.83-4.78 3.78 0 0-1.88 4.76-2 5.16 0-.37-.29-5.11-.29-5.11A4.26 4.26 0 0 0 3 6l2.16 12.93c2.76 0 4.23-1.84 5-3.78l1.72-4.39c0 .18 1.19 8.18 1.19 8.18a5.29 5.29 0 0 0 5.05-3.59L22 6c-2.73 0-4.16 1.83-4.9 3.78Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="card_inner_img_bg webflow"></div>
            </div>
            <div className="card_inner_description">
              <p className="card_txt">Follow me on Webflow showcases</p>
            </div>
          </div>
        </a>
        <a
          href="https://jonasarleth.com/patreon"
          target="_blank"
          className="card"
          onMouseEnter={shakeHand}
          onMouseLeave={resetHand}
        >
          <div className="card_inner">
            <div className="card_inner_img">
              <div className="card_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="M18 0a18 18 0 1 1 0 36 18 18 0 0 1 0-36Zm0 2.66a15.34 15.34 0 1 0 0 30.68 15.34 15.34 0 0 0 0-30.68Zm-3.98 8.3V26.6h-3.06V10.96h3.06Zm7.99 0c3.4 0 6.16 2.64 6.16 5.9 0 3.23-2.76 5.87-6.16 5.87-3.41 0-6.18-2.64-6.18-5.88 0-3.25 2.77-5.9 6.18-5.9Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="card_inner_img_bg patreon"></div>
            </div>
            <div className="card_inner_description">
              <p className="card_txt">Support my work on Patreon</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FooterCard;
