import React, { useEffect } from "react";
import { GOOGLE_API_KEY, YOUTUBE_SEARCHED_VIDEOS_API } from "../utils/constant";
import { Link } from "react-router-dom";

const Button = ({ name }) => {
  // // useEffect(() => {});

  // const getVideos = async () => {
  //   const data = await fetch(
  //     `${YOUTUBE_SEARCHED_VIDEOS_API + name} &key= ${GOOGLE_API_KEY}`
  //   );
  //   const json = await data.json();

  //   console.log(json);
  // };

  return (
    <div>
      <Link to={"search?q" + name}>
        <button className="bg-gray-200 m-2 px-2 py-1 font-semibold rounded-xl max-sm:hidden">
          {name}
        </button>
      </Link>
    </div>
  );
};

export default Button;
