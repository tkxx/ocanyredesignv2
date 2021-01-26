import React from 'react';
import { Link } from 'react-router-dom';
import SingleNewsPost from '../SingleNewsPost/SingleNewsPost';
import '../NewsPage/newsPage.css';

class NewsPage extends React.Component {
	constructor() {
		super();
		this.state = {
			id: [],
			title: [],
			excerpt: []
		};
	}

	componentDidMount = () => {
		let allPosts = 'https://jsonplaceholder.typicode.com/users/1/posts';
		fetch(allPosts).then((response) => response.json()).then((response) => {
			console.log(response);
			this.setState({

				title: response,
				excerpt: response
			});
		});

	};


	render() {
		let headline = this.state.title.map((headline, index) => {
			return (
				<>
					<h3 key={index}>{headline.title}</h3>
				</>
			)
		})

		let excerpts = this.state.excerpt.map((blog, index) => {
			return (
				<p key={index}>{blog.body}</p>
			)
		})

		return (
			<React.Fragment>
				{headline}
				{excerpts}
				
			</React.Fragment>
		);
	}
}

export default NewsPage;
