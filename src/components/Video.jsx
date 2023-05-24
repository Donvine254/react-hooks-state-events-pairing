import { prettyDOM } from "@testing-library/react";
import React, { useState } from "react";

function Video({ video }) {
  const [likes, setLikes] = useState(video.upvotes);
  const [dislikes, setDislikes] = useState(video.downvotes);
  // const [upvotes, setUpvotes] = useState(0);
  // const [downvotes, setDownvotes] = useState(0);

  // const handleUpvote = () => {
  //   setUpvotes(upvotes + 1);
  // };

  // const handleDownvote = () => {
  //   setDownvotes(downvotes + 1);
  // };
  const comment = video.comments.map((comment) => {
    return (
      <div key={comment.id}>
        <h3>{comment.user}</h3>
        <p>{comment.comment}</p>
        {/* <button onClick={handleUpvote}>upvote</button>
        <span>{upvotes}</span>
        <button onClick={handleDownvote}>downvote</button>
        <span>{downvotes}</span> */}
      </div>
    );
  });
  const [comments, setComments] = useState(comment);
  function handleLikes() {
    setLikes((prevLikes) => prevLikes + 1);
  }
  function handleDislikes() {
    setDislikes((prevDislikes) => prevDislikes + 1);
  }
  function hideComments() {
    setComments(comments ? null : comment);
  }
  return (
    <>
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>
        {video.views} views | uploaded {video.createdAt}
      </p>
      <button id="likes" onClick={handleLikes} style={buttonStyle}>
        {likes} 👍
      </button>
      <button id="dislikes" onClick={handleDislikes} style={buttonStyle}>
        {dislikes}👎
      </button>
      <br></br>
      <button style={buttonStyle} onClick={hideComments}>
        {comments ? "Hide Comments" : "Show Comments"}
      </button>
      <hr></hr>
      <h2>{video.comments.length} Comments</h2>
      {comments ? comment : null}
    </>
  );
}
const buttonStyle = {
  padding: "5px",
  backgroundColor: "#3c8dcf",
  margin: "10px",
  color: "white",
  fontSize: "24px",
};

export default Video;
