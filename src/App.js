import React from 'react';
import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/landingPage';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from '../src/routes';
import './global.css';

function App(props) {
	return (
		<Router>
			<div className="App">
				<Navbar />
				{routes}
			</div>
		</Router>
	);
}

export default App;
