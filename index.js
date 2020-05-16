'use strict';

const { execSync } = require("child_process");

module.exports = ({log}) => {
	const appName = "Fitbit OS Simulator";
	// Supporting Mac OS for now
	execSync(`osascript -e 'quit app "${appName}"'`);
	if (log) {
		console.log('Fitbit OS Simulator closed');
		console.log('Reopening...');
	}
	execSync(`osascript -e 'tell application "${appName}" to activate'`);
};
