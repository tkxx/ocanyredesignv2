import React from 'react';
import { Link } from 'react-router-dom';
import SingleNewsPost from '../SingleNewsPost/SingleNewsPost';
import testrwp from '../../data/ipa.js'
import '../NewsPage/newsPage.css';

class NewsPage extends React.Component {
	constructor() {
		super();
		this.state = {
			posts: []
		};
	}

	componentDidMount() {
		let allBlogPosts = 'https://jsonplaceholder.typicode.com/users/1/posts';
		fetch(allBlogPosts).then(response => {
			this.setState({
				blogPosts: response.data
			})
		})
		.catch(err => console.log(err))
	}


	render() {
		let newsPosts = this.state.posts.map(post => {
			return (
				<div>
					<SingleNewsPost post={post}/>
				</div>
			)
		})

		return (
			<React.Fragment>
				<section id="news-header">
				{newsPosts}
				</section>
			</React.Fragment>
		);
	}
}

export default NewsPage;
