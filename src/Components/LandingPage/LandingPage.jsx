import React from 'react';
import { Link } from 'react-router-dom';
import voteIcon from '../../images/voteIcon.svg';
import heartIcon from '../../images/heartIcon.svg';
import talkIcon from '../../images/talkicon.svg';
import facebookIcon from '../../images/facebook.svg';
import twitterIcon from '../../images/twitter.svg';
import mailIcon from '../../images/mail.svg';
import './landingPage.css';

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: [],
			excerpt: []
		};
	}

	componentDidMount = () => {
		let featurePost = 'https://jsonplaceholder.typicode.com/users/1/posts';
		fetch(featurePost).then((response) => response.json()).then((response) => {
			console.log(response);
			this.setState({
				title: response,
				excerpt: response
			});
		});

	};

	render() {
		let blogTitle = this.state.title.map((title, index) => {
			return <h4 key={index}>{title.title}</h4>;
		});

		let blogBody = this.state.excerpt.map((body, index) => {
			return <div key={index}>{body.body}</div>
		})

		return (
			<React.Fragment>
				{/* MAIN HEADER */}
				<section id="header-main">
					<h3 id="chapter-name">New York City Chapter</h3>
					<div className="title-text-box">
						<h2 id="oca-title">
							<span className="accent-font">OCA</span> Advocate Mission
						</h2>
						<p className="description">
							Founded in 1973, OCA Asian Pacific American Advocates is a national non-profit civil rights
							organization promoting and protecting the political, economic, and cultural rights of Asian
							Pacific Americans in America.
						</p>
						<button>
							<Link to="/mission">Learn More</Link>
						</button>
					</div>
				</section>

				{/* ONGOING PROGRAMS */}

				<section id="ongoing-programs">
					<div id="ongoing-programs-box">
						<h2 id="programs-text">Ongoing Programs</h2>
						<p className="programs-description">
							OCA-NY is dedicated to fostering leadership among youth, spreading awareness of Hate Crimes
							and civil rights issues in our community, and developing friendships among members.
							<p>
								We have a number of established programs that recur annually, but there is always room
								for more.
							</p>
						</p>
					</div>

					{/* SHOWCASE SPECIFIC PROGRAMMING */}

					<div id="programs-boxes">
						<div id="programs-boxes-1">
							<span className="dark-blue-square">
								<img src={voteIcon} className="program-icons " />{' '}
							</span>
							<div className="center-text">Voter Community Outreach</div>
						</div>
						<div id="programs-boxes-2">
							<span className="dark-blue-square">
								<img src={heartIcon} className="dark-blue-square program-icons" />
							</span>
							<div className="center-text">Hate Crimes Prevention Art Project</div>
						</div>
						<div id="programs-boxes-3">
							<span className="dark-blue-square">
								<img src={talkIcon} className="dark-blue-square program-icons" />
							</span>
							<div className="center-text">Mentoring A/P/A Professionals</div>
						</div>
					</div>
				</section>

				{/* LATEST NEWS */}
				<section id="latest-news-section">
					<h2 id="news-title">Latest News</h2>
					<span id="picture-and-description">
						{blogTitle}
						<div id="inner-p-d">
							{blogBody}
						</div>
					</span>
				</section>

				{/* GET INVOLVED */}
				<section id="get-involved-section">
					<div className="involved-columns">
						<h3 className="blue-accent-color">Get Involved</h3>
						<ul className="bullet-margin">
							<li>
								<a>Volunteer Today</a>
							</li>
							<li>
								<a>Become a Member</a>
							</li>

							<li>
								<a>Intern for Us</a>
							</li>
						</ul>
					</div>
					<div className="involved-middle-column">
						<h3 className="blue-accent-color">Stay in Touch</h3>
						<p className="small-text">
							Join our mailing list to get updates on OCA-NY's programs, events and more!
						</p>
						<div id="mailing-list-signup">
							<input text="" placeholder="name" className="mailing-list-input" />{' '}
							<input text="" placeholder="email address" className="mailing-list-input" />
							<button>Sign Up</button>
						</div>
					</div>
					<div className="involved-columns">
						<h3 className="blue-accent-color">Get In Touch</h3>
						<ul className="bullet-margin">
							<li className="sm-bulletpoints">
								<img src={facebookIcon} alt="facebook icon" className="social-media-icons" />{' '}
								<a
									href="https://www.facebook.com/ocany.chapter"
									alt-text="facebook link"
									target="_blank"
								>
									@OCANY.CHAPTER
								</a>
							</li>
							<li className="sm-bulletpoints">
								<img src={twitterIcon} alt="twitter icon" className="social-media-icons" />
								<a href="https://twitter.com/ocanewyork" alt-text="twitter link" target="_blank">
									@OCANEWYORK
								</a>
							</li>
							<li className="sm-bulletpoints">
								<img src={mailIcon} alt="mail icon" className="social-media-icons" />
								<a href="mailto: info@ocany.org" alt-text="email link" target="_blank">
									INFO@OCA-NY.ORG
								</a>
							</li>
						</ul>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default LandingPage;
