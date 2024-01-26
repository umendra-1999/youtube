import React from "react";
import CommentCard from "./CommentCard";
import { commentMockData } from "../utils/helper";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <CommentCard data={comment} />
      <div key={index} className="border-l-black border-b-0 pl-5 border ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5">
      <h1 className="font-bold text-xl mb-5">Comments : </h1>
      <CommentList comments={commentMockData} />
    </div>
  );
};

export default CommentContainer;
