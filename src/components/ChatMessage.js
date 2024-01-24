import React from "react";
import user from "../assets/profile-user.png";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="bg-gray-100 mx-2 flex rounded-lg shadow-md items-center mt-2">
      <img className="w-6 m-2" src={user} />
      <span className="font-semibold text-sm">{name} </span>
      <span className="text-sm px-2 ">{message}</span>
    </div>
  );
};

export default ChatMessage;
