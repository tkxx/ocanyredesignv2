import React from 'react';
import '../MissionPage/missionPage.css';

function MissionPage(props) {
	return (
		<React.Fragment>
			<section id="mission-header">
				<h1 className="header-titles mission-page-title">
					Our <span className="accent-color">Mission</span>
				</h1>
			</section>
			<section id="mission-body">
				<h2 className="accent-color" />
				<p className="programs-div-excerpt">
					Founded in 1973, OCA Asian Pacific American Advocates is a national non-profit civil rights
					organization promoting and protecting the political, economic, and cultural rights of Asian Pacific
					Americans in America. We are interested in working with anyone who shares our mission of creating a
					stronger America by advocating for the values of equal liberty and justice for all.
				</p>
				<p className="programs-div-excerpt" />
			</section>
		</React.Fragment>
	);
}

export default MissionPage;
