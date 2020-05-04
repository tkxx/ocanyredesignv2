import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div class="navbar-main">
			<div class="navbar-main-menu">
				<ul class="navbar-main-menu-links">
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
						<button class="cta-button">Donate</button>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
