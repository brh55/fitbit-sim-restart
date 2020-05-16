#!/usr/bin/env node
'use strict';
const meow = require('meow');
const fitbitSimRestart = require('.');

const cli = meow(`
	Usage
	  $ fitbit-sim-restart [input]

	Options
	  -log, -l output progress

	Examples
	  $ fitbit-sim-restart -l
	  shutting down...
	  restarting...
	  complete
	  $ fitbit-sim-restart
`, {
		flags: {
			log: {
				type: 'boolean',
				alias: 'l'
			}
		}
	}
);

console.log(fitbitSimRestart(cli.flags));
