import React from "react";
import dummy from "../assets/dummy.webp";
import user from "../assets/user.png";
import { Link } from "react-router-dom";

const SearchCard = ({ info }) => {
  const { channelTitle, description, publishedAt, thumbnails, title } =
    info.snippet;

  const { videoId } = info.id;
  return (
    <div className="">
      <Link to={"/watch?v=" + videoId}>
        <div className=" p-2 my-2 w-3/4 rounded-lg max-sm:w-full">
          <div className="flex max-sm:flex-col max-sm:justify-center max-sm:items-center ">
            <img className="w-80 rounded-lg" src={thumbnails?.high?.url} />
            <div className="flex-col mx-2 ">
              <h1 className="font-semibold my-2 text-lg max-sm:line-clamp-2">
                {title}
              </h1>
              <div className="flex text-xs">
                <h1>32M views</h1>
                <h1 className="mx-4">{publishedAt}</h1>
              </div>
              <div className="flex items-center my-3">
                <img className="w-5" src={user} />
                <h1 className="text-xs mx-2 font-medium">{channelTitle}</h1>
              </div>
              <div className="w-96 my-2 text-xs text-gray-600">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-2 w-3/4 max-sm:w-full"></div>
      </Link>
    </div>
  );
};

export default SearchCard;
