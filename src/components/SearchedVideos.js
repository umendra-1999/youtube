import { useState, useEffect } from "react";
import { GOOGLE_API_KEY, YOUTUBE_SEARCHED_VIDEOS_API } from "../utils/constant";
import SearchCard from "./SearchCard";
import { useSearchParams } from "react-router-dom";

const SearchedVideos = () => {
  const [searchedVideos, setSearchedVideos] = useState([]);
  const [searchedUrlText, setSearchedUrlText] = useSearchParams();

  useEffect(() => {
    searchVideos();
  }, [searchedUrlText]);

  const searchVideos = async () => {
    try {
      const data = await fetch(
        `https://proxy.cors.sh/${
          YOUTUBE_SEARCHED_VIDEOS_API + searchedUrlText
        } &key= ${GOOGLE_API_KEY}`,
        {
          headers: {
            "x-cors-api-key": "temp_7683d42ba0a2ea33fe7f68a5af58fd5b",
          },
        }
      );

      const json = await data.json();
      setSearchedVideos(json.items);
    } catch (error) {
      console.log(error);
    }
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
