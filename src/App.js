import React from 'react';
import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import './global.css';

function App(props) {
	return (
		<React.Fragment>
			<Navbar />
			<LandingPage />
		</React.Fragment>
	);
}

export default App;
