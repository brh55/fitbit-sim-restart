'use strict';

const {execSync} = require('child_process');
const {platform} = require('os');

module.exports = ({log}) => {
	if (platform() !== 'darwin') {
		throw new Error('Currently this only supports Mac OS, feel free to contribute and add other platforms');
	}

	const appName = 'Fitbit OS Simulator';
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
