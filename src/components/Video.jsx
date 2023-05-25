import React, { useState } from "react";
import Comments from "./Comments";


function Video({ video }) {
  const [likes, setLikes] = useState(video.upvotes);
  const [dislikes, setDislikes] = useState(video.downvotes);
  const [commentsHidden, setCommentsHidden] = useState(false);
  function handleLikes() {
    setLikes((prevLikes) => prevLikes + 1);
  }
  function handleDislikes() {
    setDislikes((prevDislikes) => prevDislikes + 1);
  }
  function hideComments() {
    setCommentsHidden(!commentsHidden)
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
      <button id="likes" onClick={handleLikes}>
        {likes} 👍
      </button>
      <button id="dislikes" onClick={handleDislikes}>
        {dislikes} 👎
      </button>
      <br/>
      <button onClick={hideComments}>
        {commentsHidden ? "Hide Comments" : "Show Comments"}
      </button>
      <hr/>
      <h2>{video.comments.length} Comments</h2>
     {!commentsHidden ?  <Comments video={video}/> : null}
     <br style={{margin:"40px"}}></br>
    </>
  );
}

export default Video;
