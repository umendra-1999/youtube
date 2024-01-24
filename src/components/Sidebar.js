import React from "react";
import { useSelector } from "react-redux";
import home from "../assets/house-black-silhouette-without-door.png";
import shorts from "../assets/play-button.png";
// import history from "../assets/history.png";
// import user from "../assets/user.png";
import subscribe from "../assets/subscribe.png";
// import clock from "../assets/clock.png";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isOpenMenu);

  if (!isMenuOpen) return null;

  return (
    <div className="h-full w-[12rem]">
      <div className="flex mx-1 items-center my-4">
        <img className="w-6 mx-2" src={home} alt="logo" />
        <h1 className="">Home</h1>
      </div>

      <div className="flex mx-1 items-center my-4">
        <img className="w-6 mx-2" src={shorts} alt="logo" />
        <h1 className="">Shorts</h1>
      </div>
      <div className="flex mx-1 items-center my-4">
        <img className="w-6 mx-2" src={subscribe} alt="logo" />
        <h1 className="">Subscription</h1>
      </div>
      <div className="border my-6 border-b-black"></div>

      <div>
        <h1 className=" text-xl m-3">You</h1>
        <h1 className="font-semibold m-3">Your channel</h1>
        <h1 className="font-semibold m-3">History</h1>
        <h1 className="font-semibold m-3">Your videos</h1>
        <h1 className="font-semibold m-3">Watch later</h1>
        <div className="border my-6 border-b-black"></div>
      </div>
      <div>
        <h1 className="font-semibold m-3">Subscription</h1>
      </div>
    </div>
  );
};

export default Sidebar;
