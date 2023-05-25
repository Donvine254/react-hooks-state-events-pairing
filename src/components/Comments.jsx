import React, { useState } from "react";
import { ImArrowDown, ImArrowUp } from "react-icons/im";
import {FcLike} from "react-icons/fc"
import {FaRegCommentAlt} from "react-icons/fa"
import{FiShare} from "react-icons/fi"

function Comments({ video }) {
  const [commentVotes, setCommentVotes] = useState({});
  const [isInputFocused, setIsInputFocused] = useState(false);

  const toggleButtonsClass = () => {
    setIsInputFocused((prevFocused) => !prevFocused);
  };
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
        <h4 className="user-comment">@ {comment.user}</h4>
        <p>{comment.comment}</p>
        <div id="icons">
          <div id="vote-wrapper">
            <ImArrowUp id="upvote" onClick={() => handleVote(commentId, 1)} />
            <span>{votes}</span>
            <ImArrowDown
              id="downvote"
              onClick={() => (votes > 0 ? handleVote(commentId, -1) : null)}
            />
          </div>
          <FcLike id="like-icon"/>
          <FaRegCommentAlt id="reply"/>
          <span id="share"><FiShare/> Share</span>
        </div>
      </div>
    );
  });

  return (
    <div id="comments">
      <form>
        <h3>Add a Comment </h3>
        <input
          type="text"
          placeholder="Type your comment here....."
          onFocus={toggleButtonsClass}></input>
        <br></br>
        <div class="buttons">
          <div>
            {" "}
            <span
              id="emoji"
              className={`buttons-container ${isInputFocused ? "show" : ""}`}>
              😄
            </span>
          </div>
          <div>
            {" "}
            <button
              id="cancel"
              type="button"
              className={`buttons-container ${isInputFocused ? "show" : ""}`}
              onClick={toggleButtonsClass}>
              cancel
            </button>
            <button
              id="comment"
              type="submit"
              className={`buttons-container ${isInputFocused ? "show" : ""}`}
              onClick={handleComment}>
              comment
            </button>
          </div>
        </div>
      </form>
      {comment}
    </div>
  );
}
function handleComment(e) {
  e.preventDefault();
  alert("Did you finish watching the video before commenting?");
}

export default Comments;
