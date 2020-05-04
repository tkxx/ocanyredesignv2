import React from 'react';

function Footer() {
	return (
		<React.Fragment>
			<footer>
				<div>
					<h5 id="footer-title">OCA-NEW YORK</h5>
					<div id="footer-underline" />
					<div class="footer-detail">
						<ul id="footer-address">
							<li>P.O. Box 3233</li>
							<li>Church Street Station</li>
							<li>New York, NY 10008</li>
						</ul>

						<p id="footer-notes">
							OCA-NY is a 501(c)(3) organization. Our financial statements are submitted annually to the
							IRS. All of our board members are volunteers.
						</p>
					</div>
				</div>
			</footer>
		</React.Fragment>
	);
}

export default Footer;
