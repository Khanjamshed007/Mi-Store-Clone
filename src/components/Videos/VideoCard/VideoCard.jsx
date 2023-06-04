import React from "react";
import "./VideoCard.scss";

const playButton = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="28px"
    viewBox="0 -960 960 960"
    width="28px"
  >
    <path d="M320-203v-560l440 280-440 280Z" />
  </svg>
);

const VideoCard = ({ index, name, image }) => {
  return (
    <div className="videocard" style={{ backgroundImage: `url(${image})` }}>
      <a href="#/">{playButton}</a>
      <p>{name}</p>
    </div>
  );
};

export default VideoCard;
