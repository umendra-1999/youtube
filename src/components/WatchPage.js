import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import LiveChat from "./LiveChat";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });

  const [Videoid] = useSearchParams();
  return (
    <>
      <div>
        <div className="ml-20 my-4 rounded-lg flex justify-center max-sm:flex max-sm:flex-col max-sm:ml-0">
          <iframe
            className="rounded-lg max-sm:w-full max-sm:h-72"
            width="850"
            height="480"
            src={"https://www.youtube.com/embed/" + Videoid.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <div className="">
            <LiveChat />
          </div>
        </div>
        <CommentContainer />
      </div>
    </>
  );
};

export default WatchPage;
