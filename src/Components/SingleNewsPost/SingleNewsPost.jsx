import React from 'react';

function SingleNewsPost(props) {
	let { id, title, body } = props.post;
	return (
		<React.Fragment>
			<p>{id}</p>
			<h4>{title}</h4>
			<p>{body}</p>
		</React.Fragment>
	)
}

export default SingleNewsPost;