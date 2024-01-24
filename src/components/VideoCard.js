import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <>
      <div className="w-96 m-2 p-2 ">
        <div className="m-2 rounded-lg shadow-lg">
          <img
            className="w-full h-44 object-cover rounded-lg"
            src={thumbnails?.standard?.url}
            alt="thumbnail"
          />
          <div className="flex px-2 py-1 ">
            <h1 className=" line-clamp-2 font-bold text-lg">{title}</h1>
          </div>
          <h1 className="px-2">{channelTitle}</h1>
          <div className="">
            <h1 className="px-2">{statistics?.viewCount} views</h1>
            <h1 className="px-2">{publishedAt}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
