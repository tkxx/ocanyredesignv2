import React from 'react';
import Logo from '../../images/OCANYlogo.svg';
import searchIcon from '../../images/searchIcon.svg';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div className="navbar-main">
			<div className="navbar-main-menu">
				<ul className="navbar-main-menu-links">
					<li>
						<Link to="/" title="Home">
							<img src={Logo} alt="OCA NY logo" id="logo" />
						</Link>
					</li>
					<li>
						<Link to="/mission" title="Our Mission">
							Our Mission
						</Link>
					</li>
					<li>
						<Link to="/programs" title="Our Programs">
							Programs
						</Link>
					</li>
					<li>
						<Link to="/news" title="News">
							News
						</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<button class="cta-button cta-word">Donate</button>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
