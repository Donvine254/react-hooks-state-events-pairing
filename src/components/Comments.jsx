import React, { useState } from "react";
import { ImArrowDown, ImArrowUp } from 'react-icons/im';

function Comments({ video }) {
  const [commentVotes, setCommentVotes] = useState({});
  const handleVote = (commentId, increment) => {
    setCommentVotes((prevVotes) => ({
      ...prevVotes,
      [commentId]: (prevVotes[commentId] || 0) + increment,
    }));
  };
  //adding increment variable makes the function dynamic
  const comment = video.comments.map((comment) => {
    const commentId = comment.id;
    const votes = commentVotes[commentId] || 0; //Sets the default vote count to zero if no votes are found in the commentVotes array
    return (
      <div key={commentId}>
        <h4>@ {comment.user}</h4>
        <div>
          <p>{comment.comment}</p>
          <div id="vote-wrapper">
            <ImArrowUp id="upvote" onClick={() => handleVote(commentId, 1)}/>
          <span>{votes}</span>
            <ImArrowDown id="downvote"
            onClick={() => (votes > 0 ? handleVote(commentId, -1) : null)}/>
          </div>
        </div>
      </div>
    );
  });
  const [comments, setComments] = useState(comment);
  function hideComments() {
    setComments(comments ? null : comment);
  }
  return (
    <div id="comments">
      <button onClick={hideComments}>
        {comments ? "Hide Comments" : "Show Comments"}
      </button>
      <hr></hr>
      <h2>{video.comments.length} Comments</h2>
      <form>
        <h3>Add a Comment </h3>
        <input
          type="text"
          name="addcomment"
          placeholder="Type your comment here....."></input>
        <button type="submit">Submit</button>
      </form>
      {comments ? comment : null}
    </div>
  );
}

export default Comments;
