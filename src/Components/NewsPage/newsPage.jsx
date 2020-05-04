import React from 'react';

class newsPage extends React.Component {
	constructor() {
		super();
		this.state = {
			news: []
		};
	}

	componentDidMount = () => {
		let newsURL = 'http://localhost:8888/ynaco/wp-json/wp/v2/news';
		fetch(newsURL).then((response) => response.json()).then((response) => {
			this.setState({
				news: response
			});
		});
	};

	render() {
		let news = this.state.news.map((news, index) => {
			return (
				<div key={index}>
					<img src={news.content.featured_media} alt="news.content.featured_media" />
				</div>
			);
		});

		return (
			<React.Fragment>
				<h1>News Page</h1>
				<div>{news}</div>
			</React.Fragment>
		);
	}
}

export default newsPage;
