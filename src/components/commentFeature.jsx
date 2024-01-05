import React, { useEffect, useState } from "react";
import { allComments } from "../data";
import CommentBox from "../ui/commentBox";
import Comments from "../ui/comments";
import { deleteComment, editReply, replyComment } from "../utils";

const CommentFeature = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(allComments);
  }, []);

  const addNewComment = (comment, author) => {
    const newComment = {
      id: new Date().getTime(),
      comment: comment,
      author: author,
      replies: [],
    };
    setComments([newComment, ...comments]);
  };

 

  const handleReply = (id, comment) => {
    const updatedComments = editReply(id, comment, comments);
    setComments([...updatedComments]);
  };
  const handleDelete = (id) => {
    const updatedReplies = deleteComment(id, comments);
    setComments([...updatedReplies]);
  };

  
  const handleReplyComment = (id, comment, author) => {
    const newComment = {
      id: new Date().getTime(),
      comment: comment,
      author: author,
      replies: []
    }
    const updatedComments = replyComment(id,newComment,comments);
    setComments([...updatedComments]);
  }

  return (
    <div className="wrapper">
      <div className="comment-box-wrapper">
        <CommentBox addNewComment={addNewComment} />
      </div>
      <div className="hr" />
      {comments?.length > 0 ? (
        comments.map((comment) => (
          <Comments
            key={comment.id}
            id={comment.id}
            comment={comment.comment}
            author={comment.author}
            replies={comment.replies}
            handleReply={handleReply}
            handleDelete={handleDelete}
            handleReplyComment={handleReplyComment}
          />
        ))
      ) : (
        <p>No comments...</p>
      )}
    </div>
  );
};

export default CommentFeature;
