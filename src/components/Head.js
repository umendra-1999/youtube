import React, { useState, useEffect } from "react";
import ytlogo from "../assets/Logo_of_YouTube_(2015-2017).svg.webp";
import hamburger from "../assets/hamburger.png";
import search from "../assets/search-interface-symbol.png";
import bell from "../assets/bell.png";
import user from "../assets/profile-user.png";
import create from "../assets/video.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { Link } from "react-router-dom";

const Head = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSeggetions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  const setInputSuggestion = (suggestion) => {
    setSearchText(suggestion);
    setShowSuggestions(false);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <div className="flex justify-between items-center shadow-lg sticky top-0 bg-slate-100 z-30">
        <div className="p-2 flex">
          <button>
            <img
              alt="icon"
              className="p-2 h-10 mx-2 max-sm:mx-0"
              src={hamburger}
              onClick={() => toggleMenuHandler()}
            />
          </button>
          <Link to={"/"}>
            <img alt="icon" className="p-2 h-12 " src={ytlogo} />
          </Link>
        </div>
        <div className=" w-1/3">
          <div className="flex justify-evenly">
            <input
              className=" border border-gray-400 h-10 w-full rounded-l-full px-4 max-sm:w-48"
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              // onFocus={() => setShowSuggestions(true)}
            />

            <Link to={"search?q=" + searchText}>
              <button
                onClick={() => setShowSuggestions(false)}
                className="bg-gray-400 rounded-r-full px-1 "
              >
                <img
                  alt="icon"
                  className="p-2 h-10 mx-2 max-sm:p-3 "
                  src={search}
                />
              </button>
            </Link>
          </div>
          {showSuggestions && (
            <div className=" m-1 z-3 absolute rounded-lg bg-white w-[28rem] max-sm:w-64 max-sm:-ml-9">
              {suggestions.map((suggestion) => (
                <Link
                  to={"search?q=" + suggestion}
                  key={suggestion}
                  onClick={() => setInputSuggestion(suggestion)}
                  className="flex items-center mt-1 mb-1  hover:bg-gray-100 rounded-lg"
                >
                  <div
                    className="flex items-center mt-1 mb-1  hover:bg-gray-100 rounded-lg"
                    key={suggestion}
                  >
                    <img className="h-4 mx-4" src={search} alt="icon" />
                    <h1 className="line-clamp-1">{suggestion}</h1>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="flex">
          <img
            alt="icon"
            className="p-2 h-10 mx-2 max-sm:hidden"
            src={create}
          />
          <img alt="icon" className="p-2 h-10 mx-2 max-sm:hidden" src={bell} />
          <img alt="icon" className="p-2 h-10 mx-2 max-sm:hidden" src={user} />
        </div>
      </div>
    </>
  );
};

export default Head;
