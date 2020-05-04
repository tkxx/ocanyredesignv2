import React from 'react';

class NewsPage extends React.Component {
	constructor() {
		super();
		this.state = {
			newsContent: [],
			newsImage: []
		};
	}

	componentDidMount = () => {
		let newsURL = 'http://localhost:8888/ynaco/wp-json/wp/v2/news';
		let newsPic = 'http://localhost:8888/ynaco/wp-json/wp/v2/media';
		fetch(newsURL).then((response) => response.json()).then((response) => {
			console.log(response);
			this.setState({
				newsContent: response
			});
		});

		fetch(newsPic).then((response) => response.json()).then((response) => {
			console.log(response);
			this.setState({
				newsImage: response
			});
		});
	};

	render() {
		let newsTitle = this.state.newsContent.map((newsContent, index) => {
			return <div key={index}>{newsContent.title.rendered}</div>;
		});

		let newsContent = this.state.newsContent.map((newsContent, index) => {
			return <div key={index}>{newsContent.content.view}</div>;
		});

		let newsPhoto = this.state.newsImage.map((newsImage, index) => {
			return (
				<div key={index}>
					<img src={newsImage.media_details.sizes.medium.source_url} alt={newsImage.caption.alt_text} />
				</div>
			);
		});

		return (
			<React.Fragment>
				<h1>News Page</h1>
				<div>{newsTitle}</div>
				<div>{newsPhoto}</div>
				<div>{newsContent}</div>
			</React.Fragment>
		);
	}
}

export default NewsPage;
