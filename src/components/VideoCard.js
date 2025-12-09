import React from "react";
import "./VideoCard.css";

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <img src={video.thumbnail} alt={video.title} />
      <div className="video-info">
        <h3>{video.title}</h3>
        <p>{video.channel}</p>
      </div>
    </div>
  );
};

export default VideoCard;
