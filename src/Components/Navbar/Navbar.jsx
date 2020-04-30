import React from 'react';

function Navbar() {
	return (
		<div class="navbar-main">
			<div class="navbar-main-menu">
				<ul class="navbar-main-menu-links">
					<li>
						<a>Our Mission</a>
					</li>
					<li>
						<a>Programs</a>
					</li>
					<li>
						<a>News</a>
					</li>
					<li>
						<a>Contact</a>
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
