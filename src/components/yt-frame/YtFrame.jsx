import React from "react";
import "./YtFrame.css";

const YtFrame = () => {
  return (
    <div className="yt_tutorial">
      <div className="yt_container">
        <a
          href="https://youtu.be/6rFm85ROcJg"
          target="_blank"
          className="yt_preview_wrap"
        >
          <img
            src="https://assets-global.website-files.com/65f83352d44ce1910698e01e/65fa9ed1d1c39db4e3f5655a_3%20Spalten%20Scroll%20Animation-youtube.jpg"
            loading="lazy"
            sizes="100vw"
            srcset="https://assets-global.website-files.com/65f83352d44ce1910698e01e/65fa9ed1d1c39db4e3f5655a_3%20Spalten%20Scroll%20Animation-youtube-p-500.jpg 500w, https://assets-global.website-files.com/65f83352d44ce1910698e01e/65fa9ed1d1c39db4e3f5655a_3%20Spalten%20Scroll%20Animation-youtube-p-800.jpg 800w, https://assets-global.website-files.com/65f83352d44ce1910698e01e/65fa9ed1d1c39db4e3f5655a_3%20Spalten%20Scroll%20Animation-youtube-p-1080.jpg 1080w, https://assets-global.website-files.com/65f83352d44ce1910698e01e/65fa9ed1d1c39db4e3f5655a_3%20Spalten%20Scroll%20Animation-youtube-p-1600.jpg 1600w, https://assets-global.website-files.com/65f83352d44ce1910698e01e/65fa9ed1d1c39db4e3f5655a_3%20Spalten%20Scroll%20Animation-youtube-p-2000.jpg 2000w, https://assets-global.website-files.com/65f83352d44ce1910698e01e/65fa9ed1d1c39db4e3f5655a_3%20Spalten%20Scroll%20Animation-youtube.jpg 2200w"
            alt="yt backgorund img"
            className="video-preview-img"
          />
          <div className="yt_play_button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              width="100%"
              fill="white"
              className="yt_play_icon"
            >
              <path d="M320-200v-560l440 280-440 280Z"></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default YtFrame;
