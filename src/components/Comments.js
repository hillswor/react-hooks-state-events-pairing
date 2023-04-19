import React from "react";

function Comments({ comments }) {
	console.log(comments);

	return (
		<div>
			<h3>{comments.length} Comments</h3>
			{comments.map((comment) => {
				return (
					<div key={comment.index}>
						<p style={{ fontWeight: "bold" }}>{comment.user}</p>
						<p>{comment.comment}</p>
					</div>
				);
			})}
		</div>
	);
}

export default Comments;
