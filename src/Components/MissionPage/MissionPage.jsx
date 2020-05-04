import React from 'react';
import '../MissionPage/missionPage.css';

function MissionPage(props) {
	return (
		<React.Fragment>
			<section id="mission-header">
				<h1 className="header-titles mission-page-title">
					Our <span className="accent-color">Mission</span>
				</h1>
			</section>
			<section id="mission-body">
				<h2 className="accent-color">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua.
				</h2>
				<p className="programs-div-excerpt">
					Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Massa tincidunt dui ut ornare
					lectus sit amet est placerat. A scelerisque purus semper eget duis. Interdum varius sit amet mattis.
					Iaculis urna id volutpat lacus laoreet non curabitur gravida. Arcu ac tortor dignissim convallis
					aenean. Rutrum tellus pellentesque eu tincidunt tortor. Sapien et ligula ullamcorper malesuada proin
					libero nunc. Pellentesque sit amet porttitor eget dolor morbi.{' '}
				</p>
				<p className="programs-div-excerpt">
					Arcu ac tortor dignissim convallis aenean. Amet mattis vulputate enim nulla aliquet porttitor lacus
					luctus accumsan. Convallis aenean et tortor at risus viverra adipiscing. Eget magna fermentum
					iaculis eu non. Et leo duis ut diam quam. Consectetur libero id faucibus nisl tincidunt eget nullam
					non nisi. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Amet
					facilisis magna etiam tempor orci eu. Sagittis vitae et leo duis ut diam quam nulla.
				</p>
			</section>
		</React.Fragment>
	);
}

export default MissionPage;
