import React from 'react';
import '../NewsPage/newsPage.css';

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
			return <div key={index}>{newsContent.content.rendered}</div>;
		});

		let newsExcerpt = this.state.newsContent.map((newsContent, index) => {
			return <div key={index}>{newsContent.excerpt.rendered}</div>;
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
				<section id="news-header">
					<h1 className="header-titles news-page-title">News</h1>
				</section>
				<section id="news-body">
					<div className="news-posts">
						<div id="news-component-title">{newsTitle}</div>
						<div id="news-component-excerpt">{newsExcerpt}</div>
						<div id="news-component-photo">{newsPhoto}</div>
						<div id="news-component-content">{newsContent}</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default NewsPage;
