import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import ShimmerContainer from "./ShimmerContainer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json?.items);
    setLoading(false);
  };

  return (
    <div className=" w-full flex flex-wrap m-auto items-center justify-center max-sm:ml-8">
      {loading ? (
        <>
          <ShimmerContainer />
        </>
      ) : (
        <>
          {videos.map((video) => (
            <Link key={video?.id} to={"watch?v=" + video?.id}>
              <VideoCard info={video} />
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default VideoContainer;
