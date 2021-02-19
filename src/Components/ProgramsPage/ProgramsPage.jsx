import React from 'react';
import voteIcon from '../../images/voteIcon.svg';
import heartIcon from '../../images/heartIcon.svg';
import talkIcon from '../../images/talkicon.svg';
import '../ProgramsPage/programsPage.css';

class ProgramsPage extends React.Component {
	constructor() {
		super();
		this.state = {
			programs: []
		};
	}

	// componentDidMount = () => {
	// 	let programsURL = 'http://167.71.250.204//wp-json/wp/v2/programs';
	// 	fetch(programsURL).then((response) => response.json()).then((response) => {
	// 		console.log(response);
	// 		this.setState({
	// 			programs: response
	// 		});
	// 	});
	// };
	render() {
		return (
			<React.Fragment>
				<section id="programs-header">
					<h1 className="header-titles programs-page-title">Programs</h1>
				</section>
				<section id="programs-body">
					{/* VOTER OUTREACH BOX */}
					<div className="program-div-boxes">
						<div className="program-blue-square-div">
							<img src={voteIcon} alt="voting ballot icon" className="program-icons-lg" />
						</div>
						<div id="program-explanations">
							<h3 className="programs-div-title" className="accent-color">
								Voter Outreach
							</h3>
							<p className="programs-div-excerpt">
								Every summer, OCA-NY participates in a voter outreach campaign that includes door
								knocking, phone banking, and in-person voter registration. We are committed to informing
								the Asian Pacific American community of their right and privilege, and making sure that
								our voices are heard in the American political system.
							</p>
							<p>
								<a>Read More</a>
							</p>
						</div>
					</div>

					{/* HATE CRIMES PREVENTION BOX */}
					<div className="program-div-boxes">
						<div className="program-blue-square-div">
							<img src={heartIcon} alt="heart crosshairs icon" className="program-icons-lg" />
						</div>
						<div id="program-explanations">
							<h3 className="programs-div-title" className="accent-color">
								Hate Crimes Prevention Art Project
							</h3>
							<p className="programs-div-excerpt">
								OCA-NY is looking for a college student or recent college graduate for a full-time
								summer internship position to coordinate OCA-NY's 12th Annual Hate Crimes Prevention Art
								Project. Now, more than ever, this Project is needed.
							</p>
							<p>
								<a>Read More</a>
							</p>
						</div>
					</div>

					{/* MAAP BOX */}
					<div className="program-div-boxes">
						<div className="program-blue-square-div">
							<img src={talkIcon} alt="texting icon" className="program-icons-lg" />
						</div>
						<div id="program-explanations">
							<h3 className="programs-div-title" className="accent-color">
								Mentoring A/P/A Professionals
							</h3>
							<p className="programs-div-excerpt">
								MAAP IS CULTIVATING THE NEXT GENERATION OF ASIAN AMERICAN & PACIFIC ISLANDER
								PROFESSIONALS THROUGH MENTORING, SKILLS BUILDING, AND NETWORKING!
							</p>
							<p>
								<a>Read More</a>
							</p>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default ProgramsPage;
