import React, { useState } from "react";
import { user } from "../data";
import Avatar from "./avatar";

const CommentBox = ({ addNewComment }) => {
  const [comment, setComment] = useState("");
  const reply = (e) => {
    e.preventDefault();
    if(comment){
      addNewComment(comment, user);
      setComment("");
    }
  };
  return (
    <form onSubmit={reply} className="comment-box">
      <Avatar name={user.name} bkgColor={user.bkgColor} />
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
        <div className="reply-btn" onClick={reply}>
          Reply
        </div>
    </form>
  );
};
export default CommentBox;
