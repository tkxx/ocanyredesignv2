import React from 'react';
import '../ProgramsPage/programsPage.css';

class ProgramsPage extends React.Component {
	constructor() {
		super();
		this.state = {
			programs: []
		};
	}

	componentDidMount() {
		let programsURL = 'http://localhost:8888/ynaco/wp-json/wp/v2/programs';
		fetch(programsURL).then((response) => response.json()).then((response) => {
			console.log(response);
			this.setState({
				programs: response
			});
		});
	}

	render() {
		let programsTitle = this.state.programs.map((programs, index) => {
			return <div key={index}>{programs.title.rendered}</div>;
		});

		let programsExcerpt = this.state.programs.map((programs, index) => {
			return <div key={index}>{programs.excerpt.rendered}</div>;
		});

		return (
			<React.Fragment>
				<section id="programs-header">
					<h1 className="header-titles programs-page-title">Programs</h1>
				</section>
				<section id="programs-body">
					<div className="program-div-boxes">
						<span className="program-blue-square-div" />
						<h3 id="programs-div-title" className="accent-color">
							{programsTitle}
						</h3>
						<p id="programs-div-excerpt">{programsExcerpt}</p>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default ProgramsPage;
