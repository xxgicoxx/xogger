# Xogger

Xogger is a node package to create logs.

# Installation
````
npm install xogger --save
````

# Example
````
const xogger = require('xogger');

xogger.debug('Debug log');
xogger.error('Error log');
xogger.info('Info log');
xogger.warn('Warn log');

xogger.debug('Debug Log', {
    folder: './debug/'
});

xogger.debug('Debug log', {
    folder: './debug/',
    name: 'lol'
});
````

# Options
````
//Folder name
folder: './logs/'

//Log name
name: 'system_log'

//Example
{
    folder: './logs/',
    name: 'system_log'
}
````