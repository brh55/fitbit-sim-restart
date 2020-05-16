'use strict';

const { execSync } = require("child_process");

module.exports = ({log}) => {
	const appName = "Fitbit OS Simulator";
	// Supporting Mac OS, will take contributions here:
	execSync(`osascript -e 'quit app "${appName}"'`);
	if (log) {
		console.log('Fitbit OS Simulator Closed');
		console.log('Restarting...');
	}

	execSync(`osascript -e 'tell application "${appName}" to activate'`);
	if (log) {
		console.log('Fitbit OS Simulator Opened');
	}
};
