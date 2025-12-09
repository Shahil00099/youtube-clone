import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import videos from "../data/videos";
import VideoCard from "../components/VideoCard";
import "./WatchPage.css";

const WatchPage = () => {
  const { id } = useParams();
  const video = videos.find((v) => v.id === parseInt(id));

  // Recommended videos (all except current)
  const recommended = videos.filter((v) => v.id !== parseInt(id));

  return (
    <Layout>
      <div className="watch-container">
        <div className="video-player">
          {video ? (
            <iframe
              width="100%"
              height="400px"
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <p>Video not found</p>
          )}
          <h2>{video?.title}</h2>
          <p className="channel">{video?.channel}</p>
        </div>

        <div className="recommended">
          <h3>Recommended</h3>
          <div className="recommended-videos">
            {recommended.map((v) => (
              <Link key={v.id} to={`/watch/${v.id}`}>
                <VideoCard video={v} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WatchPage;
