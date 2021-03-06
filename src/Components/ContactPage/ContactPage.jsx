import React from 'react';
import twitterIcon from '../../images/twitter.svg';
import facebookIcon from '../../images/facebook.svg';
import mailIcon from '../../images/mail.svg';
import '../ContactPage/contactPage.css';

function contactPage(props) {
	return (
		<React.Fragment>
			<section id="contact-header">
				<h1 className="header-titles contact-page-title">
					<span className="white-accent-color">Get</span> <span className="blue-accent-color">Involved</span>
				</h1>
			</section>
			<section id="contact-body">
				<div id="body-boxes">
					<div id="cta-boxes">
						<div className="three-div-boxes blue-box">
							<h4>
								<span className="accent-color">Volunteer </span>
								<span className="white-accent-color">Today</span>
							</h4>
							<p className="white-accent-color">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra
								mauris in aliquam sem.
							</p>
							<p>
								<a className="white-accent-color">READ MORE</a>
							</p>
						</div>
						<div className="three-div-boxes light-gray-box">
							<h4>
								<span className="blue-accent-color">Become a</span>
								<span className="accent-color"> Member</span>
							</h4>
							<p className="blue-accent-color">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra
								mauris in aliquam sem.
							</p>
							<p>
								<a>READ MORE</a>
							</p>
						</div>
						<div className="three-div-boxes teal-box">
							<h4>
								<span className="accent-color">Intern</span>{' '}
								<span className="white-accent-color">for Us</span>
							</h4>
							<p className="white-accent-color">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra
								mauris in aliquam sem.
							</p>
							<p>
								<a>READ MORE</a>
							</p>
						</div>
					</div>
					<div id="get-involved-boxes">
						<div className="two-div-boxes light-gray-box">
							<h4>
								<span className="blue-accent-color">Join Our</span>
								<span className="accent-color"> Mailing List</span>
							</h4>
							<p className="blue-accent-color">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.{' '}
							</p>
							<p className="blue-accent-color bold">
								Name{' '}
								<span>
									<input type="text" placeholder="Name" className="mailing-list-input" />
								</span>
							</p>
							<p className="blue-accent-color bold">
								Email<span>
									{' '}
									<input type="email" placeholder="Email Address" className="mailing-list-input" />
								</span>
							</p>
							<p>
								<button className="cta-button">Submit</button>
							</p>
						</div>
						<div className="two-div-boxes blue-box">
							<h4>
								<span className="white-accent-color">Get</span>
								<span className="accent-color"> In Touch</span>
							</h4>
							<p className="white-accent-color">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
							<ul className="bullet-margin">
								<li className="white-accent-color sm-bulletpoints">
									<img src={twitterIcon} alt="twitter icon" className="social-media-icons" />{' '}
									<p>
										<a
											href="https://twitter.com/ocanewyork"
											alt-text="twitter link"
											target="_blank"
											className="white-accent-color"
										>
											@OCANEWYORK
										</a>
									</p>
								</li>
								<li className="white-accent-color sm-bulletpoints">
									<img src={facebookIcon} alt="facebook icon" className="social-media-icons" />{' '}
									<p>
										<a
											href="https://www.facebook.com/ocany.chapter"
											alt-text="facebook link"
											target="_blank"
											className="white-accent-color"
										>
											@OCANY.CHAPTER
										</a>
									</p>
								</li>
								<li className="white-accent-color sm-bulletpoints">
									<img src={mailIcon} alt="email icon" className="social-media-icons" />{' '}
									<p>
										<a
											href="mailto:info@oca-ny.org"
											alt-text="email link"
											target="_blank"
											className="white-accent-color"
										>
											INFO@OCA-NY.ORG
										</a>
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export default contactPage;
