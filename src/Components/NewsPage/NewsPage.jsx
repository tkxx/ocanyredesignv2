import React from 'react';
import { Link } from 'react-router-dom';
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
		let newsURL = 'http://167.71.250.204//wp-json/wp/v2/news';
		let newsPic = 'http://167.71.250.204//wp-json/wp/v2/media';
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
		let newsPhoto = this.state.newsImage.map((newsImage, index) => {
			return (
				<div key={index}>
					<img src={newsImage.media_details.sizes.medium.source_url} alt={newsImage.caption.alt_text} />
				</div>
			);
		});

		let newsPost = this.state.newsContent.map((newsContent, index) => {
			return (
				<div className="news-content-paragraphs" key={index}>
					<h1>{newsContent.title.rendered}</h1>
					<div className="news-photo">{newsPhoto}</div>
					<p
						className="news-content-excerpt"
						dangerouslySetInnerHTML={{ __html: newsContent.excerpt.rendered }}
					/>
					<p
						className="news-content-text"
						dangerouslySetInnerHTML={{ __html: newsContent.content.rendered }}
					/>

					<Link to="/news/:slug">Read More</Link>
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
						<div>{newsPost}</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default NewsPage;
