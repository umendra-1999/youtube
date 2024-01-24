import React from "react";
import dummyUser from "../assets/profile-user.png";

const CommentCard = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="ml-20 flex items-center rounded-lg mt-1 bg-slate-100 p-2">
      <img className="w-8 h-8 mr-3 " src={dummyUser} />
      <div>
        <p className="font-bold text-sm">{name}</p>
        <p className="text-sm ">{text}</p>
      </div>
    </div>
  );
};

export default CommentCard;
