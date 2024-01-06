import React, { useRef, useState } from "react";
import { user } from "../../data";
import Avatar from "./avatar";
import ReplyBox from "./replyBox";

const Comments = ({
  id,
  comment,
  author,
  replies,
  handleReply,
  handleDelete,
  handleReplyComment
}) => {
  const [editing, setEditing] = useState(false);
  const [editingComment, setEditingComment] = useState(comment);
  const [replying, setReplying] = useState(false);
  const inputRef = useRef(null);
  const toggleEditing = () => {
    if (!editing) {
      inputRef.current.focus();
    }
    setEditing((editing) => !editing);
    setEditingComment(comment)
  };
  const reply = () => {
    setEditing((editing) => !editing);
    handleReply(id, editingComment);
  };
  const deleteFunc = () => {
    handleDelete(id);
  };

  const toggleReply = ()=>{
    setReplying(replying=>!replying)
  }
  return (
    <div className="comment-wrapper">
      <div className="comment">
        <div className="comment-inner">
          <Avatar name={author.name} bkgColor={author.bkgColor} />
          <input
            value={editingComment}
            className={`${editing ? "editing" : ""} input-box`}
            onChange={(e) => setEditingComment(e.target.value)}
            ref={inputRef}
          />
        </div>
        <div className="buttons">
          {
            !editing && !replying ?
              <div onClick={toggleReply}>
                Reply
              </div>
              :
              null
          }
          {user.name === author.name ? (
            <div className="edit-btn" onClick={toggleEditing}>
              {
                editing ?
                  "Cancel" :
                  "Edit"
              }
            </div>
          ) : null}
          {editing ? (
            <div className="reply-btn" onClick={reply}>
              Reply
            </div>
          ) : null}
          {user.name === author.name && !editing ? (
            <div className="delete-btn" onClick={deleteFunc}>
              Delete
            </div>
          ) : null}
        </div>
        {
          replying?
          <ReplyBox toggleReply={toggleReply} handleReplyComment={handleReplyComment} id={id}/>
          :
          null
        }
      </div>
      {replies?.length > 0
        ? replies.map((comment) => (
          <div className="comment-reply" key={comment.id}>
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
          </div>
        ))
        : null}
    </div>
  );
};
export default Comments;
