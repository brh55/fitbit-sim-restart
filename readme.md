# fitbit-sim-restart [![Build Status](https://travis-ci.com/brh55/fitbit-sim-restart.svg?branch=master)](https://travis-ci.com/brh55/fitbit-sim-restart)

> Simple little CLI to restart the Fitbit OS Simulator


## Install

```
$ npm install fitbit-sim-restart
```


## Usage

```js
const fitbitSimRestart = require('fitbit-sim-restart');

fitbitSimRestart('unicorns');
//=> 'unicorns & rainbows'
```


## API

### fitbitSimRestart(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### foo

Type: `boolean`\
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global fitbit-sim-restart
```

```
$ fitbit-sim-restart --help

  Usage
    fitbit-sim-restart [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ fitbit-sim-restart
    unicorns & rainbows
    $ fitbit-sim-restart ponies
    ponies & rainbows
```
