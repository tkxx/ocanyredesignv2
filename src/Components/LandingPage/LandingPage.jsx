import React from 'react';
import { Link } from 'react-router-dom';
import voteIcon from '../../images/voteIcon.svg';
import heartIcon from '../../images/heartIcon.svg';
import talkIcon from '../../images/talkicon.svg';
import facebookIcon from '../../images/facebook.svg';
import twitterIcon from '../../images/twitter.svg';
import mailIcon from '../../images/mail.svg';
import testrwp from '../../data/ipa.js';
import './landingPage.css';

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newsImage: [],
			newsTitle: [],
			newsExcerpt: []
		};
	}

	componentDidMount = () => {
		let newsURL = `${testrwp}/wp-json/wp/v2/posts`;
		let newsPic = 'http://167.71.250.204//wp-json/wp/v2/media';
		fetch(newsURL).then((response) => response.json()).then((response) => {
			console.log(response);
			this.setState({
				newsTitle: response
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
		let newsTitle = this.state.newsTitle.map((newsTitle, index) => {
			return <div key={index}>{newsTitle.title.rendered}</div>;
		});

		let newsExcerpt = this.state.newsExcerpt.map((newsExcerpt, index) => {
			return <div key={index}>{newsTitle.caption.rendered}</div>;
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
						<div id="landing-news-photo">{newsPhoto}</div>
						<div id="inner-p-d">
							<p className="news-title">{newsTitle}</p>
							<p className="news-excerpt">{newsExcerpt}</p>
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
