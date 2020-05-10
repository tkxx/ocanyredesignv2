import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MissionPage from './Components/MissionPage/MissionPage';
import ProgramsPage from './Components/ProgramsPage/ProgramsPage';
import NewsPage from './Components/NewsPage/NewsPage';
import SingleNewsPost from './Components/SingleNewsPost/SingleNewsPost';
import ContactPage from './Components/ContactPage/ContactPage';
import LandingPage from './Components/LandingPage/LandingPage';

export default (
	<Switch>
		<Route path="/mission" component={MissionPage} />
		<Route path="/programs" component={ProgramsPage} />
		<Route path="/news" component={NewsPage} />
		<Route path="/news/:slug" component={SingleNewsPost} />
		<Route path="/contact" component={ContactPage} />
		<Route exact path="/" component={LandingPage} />
	</Switch>
);
