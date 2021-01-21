import React from 'react';

class SingleNewsPost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			singlePost: []
		};
	}

	render() {
		// let newsPhoto = this.state.newsImage.map((newsImage, index) => {
		// 	return (
		// 		<div key={index}>
		// 			<img src={newsImage.media_details.sizes.medium.source_url} alt={newsImage.caption.alt_text} />
		// 		</div>
		// 	);
		// });

		// let newsPost = this.state.newsContent.map((newsContent, index) => {
		// 	return (
		// 		<div className="news-content-paragraphs" key={index}>
		// 			<h1>{newsContent.title.rendered}</h1>
		// 			<div className="news-photo">{newsPhoto}</div>
		// 			<p
		// 				className="news-content-excerpt"
		// 				dangerouslySetInnerHTML={{ __html: newsContent.excerpt.rendered }}
		// 			/>
		// 			<p
		// 				className="news-content-text"
		// 				dangerouslySetInnerHTML={{ __html: newsContent.content.rendered }}
		// 			/>

		// <Link to="/news/:slug">Read More</Link>;
		// 		</div>
		// 	);
		// });

		const { title, excerpt } = this.props.singlePost;
		console.log(this.props);
		return (
			<React.Fragment>
				<h1>{title.rendered}</h1>
				<p>{excerpt.rendered}</p>
			</React.Fragment>
		);
	}
}

export default SingleNewsPost;
