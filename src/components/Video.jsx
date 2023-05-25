import React, { useState } from "react";
import Comments from "./Comments";

function Video({ video }) {
  const [likes, setLikes] = useState(video.upvotes);
  const [dislikes, setDislikes] = useState(video.downvotes);
  function handleLikes() {
    setLikes((prevLikes) => prevLikes + 1);
  }
  function handleDislikes() {
    setDislikes((prevDislikes) => prevDislikes + 1);
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
        {video.views.toLocaleString()} views | uploaded {video.createdAt}
      </p>
      <button id="likes" onClick={handleLikes} style={buttonStyle}>
        {likes} 👍
      </button>
      <button id="dislikes" onClick={handleDislikes} style={buttonStyle}>
        {dislikes} 👎
      </button>
      <br></br>
      <Comments video={video}/>
    </>
  );
}
export const buttonStyle = {
  padding: "5px",
  backgroundColor: "#3c8dcf",
  margin: "10px",
  color: "white",
  fontSize: "24px",
  border:"none",
};

export default Video;
