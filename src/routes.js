import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MissionPage from './Components/MissionPage/missionPage';
import ProgramsPage from './Components/ProgramsPage/programsPage';
import NewsPage from './Components/NewsPage/newsPage';
import ContactPage from './Components/ContactPage/contactPage';
import LandingPage from './Components/LandingPage/landingPage';

export default (
	<Switch>
		<Route path="/mission" component={MissionPage} />
		<Route path="/programs" component={ProgramsPage} />
		<Route path="/news" component={NewsPage} />
		<Route path="/contact" component={ContactPage} />
		<Route exact path="/" component={LandingPage} />
	</Switch>
);
