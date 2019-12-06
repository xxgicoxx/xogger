# Xogger
Xogger is a node package to create logs.

### Installation
````
npm install xogger
````

### Example
```javascript
const xogger = require('xogger');

// Log on default folder and name
xogger.debug('Debug log');
xogger.error('Error log');
xogger.info('Info log');
xogger.warn('Warn log');

// Feed line
xogger.feed();

// Change folder of logs
xogger.config({
    folder: './logs/folder/'
});

// Change folder and name of logs
xogger.config({
    folder: './logs/folder/',
    name: 'lol'
});
```

### Built With
* [Node.js](https://nodejs.org/en/)

### Authors
* **Giovani de Oliveira** - [xxgicoxx](https://github.com/xxgicoxx)