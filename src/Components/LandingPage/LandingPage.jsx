import React from 'react';
import './landingPage.css';

function LandingPage(props) {
	return (
		<React.Fragment>
			<section class="header-main">
				<h3 id="chapter-name">New York City Chapter</h3>
				<div class="title-text-box">
					<h2 id="oca-title">
						<span class="accent-font">OCA</span> Advocate Mission
					</h2>
					<p class="description">
						Founded in 1973, OCA Asian Pacific American Advocates is a national non-profit civil rights
						organization promoting and protecting the political, economic, and cultural rights of Asian
						Pacific Americans in America.
					</p>
					<button>Learn More</button>
				</div>
			</section>
			<section id="ongoing-programs-box">
				<h2 id="programs-text">Ongoing Programs</h2>
				<p class="programs-description">
					OCA-NY is dedicated to fostering leadership among youth, spreading awareness of Hate Crimes and
					civil rights issues in our community, and developing friendships among members.
					<p>
						We have a number of established programs that recur annually, but there is always room for more.
					</p>
				</p>
			</section>
		</React.Fragment>
	);
}

export default LandingPage;
