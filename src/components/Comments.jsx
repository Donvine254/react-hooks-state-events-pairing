import React, { useState } from "react";
import { buttonStyle } from "./Video";

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
        <h4>{comment.user}</h4>
        <p>
          {comment.comment}{" "}
          <button
            id="upvote"
            onClick={() => handleVote(commentId, 1)}
            style={voteBtnStyle}>
            &#8679; {votes}
          </button>
          <button
            id="downvote"
            onClick={() => handleVote(commentId, -1)}
            style={voteBtnStyle}>
            &#8681;
          </button>
        </p>
      </div>
    );
  });
  const [comments, setComments] = useState(comment);
  function hideComments() {
    setComments(comments ? null : comment);
  }
  return (
    <>
      <button style={buttonStyle} onClick={hideComments}>
        {comments ? "Hide Comments" : "Show Comments"}
      </button>
      <hr></hr>
      <h2>{video.comments.length} Comments</h2>
      {comments ? comment : null}
    </>
  );
}
const voteBtnStyle = {
  margin: "0px",
  border: "none",
  fontSize: "20px",
  padding: "10px",
  backgroundColor: "inherit",
};

export default Comments;
