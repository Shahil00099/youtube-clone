import React from "react";
import Layout from "../components/Layout";
import videos from "../data/videos";
import VideoCard from "../components/VideoCard";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Layout>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {videos.map((video) => (
          <Link key={video.id} to={`/watch/${video.id}`}>
            <VideoCard video={video} />
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
