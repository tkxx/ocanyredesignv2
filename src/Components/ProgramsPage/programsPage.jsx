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

	// componentDidMount() {
	// 	let programsURL = 'http://localhost:8888/ynaco/wp-json/wp/v2/programs';
	// 	fetch(programsURL).then((response) => response.json()).then((response) => {
	// 		console.log(response);
	// 		this.setState({
	// 			programs: response
	// 		});
	// 	});
	// }

	render() {
		// let programsTitle = this.state.programs.map((programs, index) => {
		// 	return <div key={index}>{programs.title.rendered}</div>;
		// });

		// let programsExcerpt = this.state.programs.map((programs, index) => {
		// 	return <div key={index}>{programs.excerpt.rendered}</div>;
		// });

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
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra
								mauris in aliquam sem. Massa tincidunt dui ut ornare lectus sit amet est placerat.
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
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra
								mauris in aliquam sem. Massa tincidunt dui ut ornare lectus sit amet est placerat.
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
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra
								mauris in aliquam sem. Massa tincidunt dui ut ornare lectus sit amet est placerat.
							</p>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default ProgramsPage;
