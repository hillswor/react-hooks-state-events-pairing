import React from "react";

function VideoInfo({
	title,
	views,
	createdAt,
	upvotes,
	downvotes,
	showComments,
	handleToggle,
	handleUpvote,
	handleDownvote,
}) {
	return (
		<div>
			<h1>{title}</h1>
			<p>
				{views} Views | Uploaded {createdAt}
			</p>
			<button type="button" onClick={() => handleUpvote()}>
				{upvotes} 👍
			</button>
			<button type="button" onClick={handleDownvote}>
				{downvotes} 👎
			</button>
			<button
				type="button"
				onClick={() => handleToggle()}
				style={{ display: "block", margin: "auto" }}
			>
				{showComments ? "Hide Comments" : "Show Comments"}
			</button>
		</div>
	);
}
export default VideoInfo;
