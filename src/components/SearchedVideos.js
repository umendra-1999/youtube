import { useState, useEffect } from "react";
import { GOOGLE_API_KEY, YOUTUBE_SEARCHED_VIDEOS_API } from "../utils/constant";
import SearchCard from "./SearchCard";
import { useSearchParams } from "react-router-dom";

const SearchedVideos = () => {
  const [searchedVideos, setSearchedVideos] = useState([]);
  const [searchedUrlText] = useSearchParams();

  useEffect(() => {
    searchVideos();
  }, [searchedUrlText]);

  const searchVideos = async () => {
    const data = await fetch(
      `${YOUTUBE_SEARCHED_VIDEOS_API + searchedUrlText} &key= ${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    setSearchedVideos(json.items);
  };

  return (
    <div className="">
      {searchedVideos.map((data) => (
        <SearchCard key={data?.etag} info={data} />
      ))}
    </div>
  );
};

export default SearchedVideos;
