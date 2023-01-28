import React from "react";
import PropTypes from "prop-types"
//include images into your bundle


//create your first component
const Home = (props) => {
	return (
		<div className="alberto animation">
			<div className="clock"><i class="far fa-clock"></i></div>
			<div className="days">{props.daysNumber % 86400} days</div>
			<div className="hours">{props.hoursNumber % 3600} h</div>
			<div className="mins">{props.minsNumber % 60} min</div>
			<div className="secs">{props.secsNumber % 60} s</div>
		</div>
	);
};

Home.propTypes = {
	secsNumber: PropTypes.number,
	minsNumber: PropTypes.number,
	hoursNumber: PropTypes.number,
	daysNumber: PropTypes.number,
};

export default Home;
