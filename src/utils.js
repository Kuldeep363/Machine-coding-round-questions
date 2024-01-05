export const replyComment = (id,reply, allComments) => {
    console.log(allComments,id)
    for (let i = 0; i < allComments.length; i++) {
      console.log(allComments[i].id)
      if (allComments[i].id === id) {
        allComments[i].replies = [reply, ...allComments[i].replies];
        console.log("******got it****:", allComments[i])
        return allComments;
      } else if (allComments[i].replies.length > 0) {
        const replies = replyComment(id,reply, allComments[i].replies);
        if (replies !== allComments[i].replies) {
          allComments[i].replies = replies;
          return allComments;
        }
      }
    }
    return allComments;
  }

export const deleteComment = (id, allComments) => {
  for (let i = 0; i < allComments.length; i++) {
    console.log(allComments[i]);
    if (allComments[i].id === id) {
      console.log("****got it:", allComments[i]);
      allComments.splice(i, 1);
      console.log("got it:", allComments);
      return allComments;
    } else if (allComments[i].replies.length > 0) {
      const updatedReplies = deleteComment(id, allComments[i].replies);
      if (updatedReplies !== allComments[i].replies) {
        allComments[i].replies = updatedReplies;
        return allComments;
      }
    }
  }
  return allComments;
};

export const editReply = (id, comment, allComments) => {
    for (let i = 0; i < allComments.length; i++) {
      console.log(allComments[i])
      if (allComments[i].id === id) {
        allComments[i].comment = comment;
        console.log("******got it****:", allComments[i])
        return allComments;
      } else if (allComments[i].replies.length > 0) {
        const replies = editReply(id, comment, allComments[i].replies);
        if (replies !== allComments[i].replies) {
          console.log("different")
          allComments[i].replies = replies;
          return allComments;
        }
      }
    }
    return allComments;
  };
