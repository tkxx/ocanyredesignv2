import React from 'react';
import './landingPage.css';

function LandingPage(props) {
	return (
		<React.Fragment>
			<section className="header-main">
				<h3 id="chapter-name">New York City Chapter</h3>
				<div className="title-text-box">
					<h2 id="oca-title">
						<span class="accent-font">OCA</span> Advocate Mission
					</h2>
					<p className="description">
						Founded in 1973, OCA Asian Pacific American Advocates is a national non-profit civil rights
						organization promoting and protecting the political, economic, and cultural rights of Asian
						Pacific Americans in America.
					</p>
					<button>Learn More</button>
				</div>
			</section>
			<section id="ongoing-programs">
				<div id="ongoing-programs-box">
					<h2 id="programs-text">Ongoing Programs</h2>
					<p className="programs-description">
						OCA-NY is dedicated to fostering leadership among youth, spreading awareness of Hate Crimes and
						civil rights issues in our community, and developing friendships among members.
						<p>
							We have a number of established programs that recur annually, but there is always room for
							more.
						</p>
					</p>
				</div>
				<div id="programs-boxes">
					<div id="programs-boxes-1">
						<div className="dark-blue-square" />Voter Outreach
					</div>
					<div id="programs-boxes-2">
						<div className="dark-blue-square" />Hate Crimes Prevention Art Project
					</div>
					<div id="programs-boxes-3">
						<div className="dark-blue-square" />Mentoring A/P/A Professionals
					</div>
				</div>
			</section>
			<section id="latest-news-section">
				<h2 id="news-title">Latest News</h2>
				<div id="picture-and-description">
					<p>Image Placeholder</p>
					<p>Description Placeholder from WP</p>
				</div>
			</section>
			<section id="get-involved-section">
				<div className="involved-columns">
					<h3>Get Involved</h3>
					<ul>
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
				<div className="involved-columns">
					<h3>Stay in Touch</h3>
					<p>Join our mailing list to get updates on OCA-NY's programs, events and more!</p>
				</div>
				<div className="involved-columns">
					<h3>Get In Touch</h3>
					<ul>
						<li>@OCANY_CHAPTER</li>
						<li>@OCANEWYORK</li>
						<li>info@ocany.org</li>
					</ul>
				</div>
			</section>
		</React.Fragment>
	);
}

export default LandingPage;
