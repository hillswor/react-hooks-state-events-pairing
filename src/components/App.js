import React, { useState } from "react";
import video from "../data/video.js";
import Video from "./Video";
import VideoInfo from "./VideoInfo";
import Comments from "./Comments";

function App() {
  const [videoInfo, setVideoInfo] = useState(video);
  const [showComments, setShowComments] = useState(false);

  console.log(videoInfo.upvotes);

  function handleToggle() {
    setShowComments(!showComments);
  }

  function handleUpvote() {
    setVideoInfo({ ...videoInfo, upvotes: videoInfo.upvotes + 1 });
  }

  function handleDownvote() {
    setVideoInfo({ ...videoInfo, downvotes: videoInfo.downvotes + 1 });
  }

  const {
    comments,
    createdAt,
    downvotes,
    embedUrl,
    id,
    title,
    upvotes,
    views,
  } = videoInfo;

  return (
    <div className="App">
      <Video embedUrl={embedUrl} title={title} />
      <VideoInfo
        title={title}
        views={views}
        createdAt={createdAt}
        upvotes={upvotes}
        downvotes={downvotes}
        showComments={showComments}
        handleToggle={handleToggle}
        handleUpvote={handleUpvote}
        handleDownvote={handleDownvote}
      />
      {showComments ? <Comments comments={comments} /> : null}
    </div>
  );
}

export default App;
