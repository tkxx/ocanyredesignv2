import React from 'react';
import './landingPage.css';

function LandingPage(props) {
	return (
		<React.Fragment>
			<div class="header-main">
				<div class="circles">
					<span id="white-circle" />
					<span id="red-circle" />
					<span id="teal-circle" />
				</div>
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
			</div>
			{/* Circle icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
		</React.Fragment>
	);
}

export default LandingPage;
