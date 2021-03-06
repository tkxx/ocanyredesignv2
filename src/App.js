import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from '../src/routes';
import './global.css';

function App(props) {
	return (
		<Router>
			<div className="App">
				<Navbar />
				{routes}
				<Footer />
			</div>
		</Router>
	);
}

export default App;
