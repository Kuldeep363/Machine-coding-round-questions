import React, { useState } from 'react'
import { user } from '../data';

const ReplyBox = ({id,toggleReply,handleReplyComment}) => {
    const [replyText, setReplyText] = useState("");
    const replyToComment = ()=>{
        toggleReply()
        handleReplyComment(id,replyText,user)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        replyToComment()
    }
  return (
    <div>
        <form className='reply-box' onSubmit={handleSubmit}>
            <input value={replyText} onChange={e=>setReplyText(e.target.value)} autoFocus/>
        </form>
        <div className="buttons">
            <div onClick={replyToComment}>Reply</div>
            <div onClick={toggleReply}>Cancel</div>
        </div>
    </div>
  )
}

export default ReplyBox