# Xogger
Node.js package for create logs.

<p align="center">
  <img src="https://i.imgur.com/roVm6b6.png">
</p>

# Prerequisites
* [Node.js](https://nodejs.org/en/)

# Installation
````
npm install xogger
````

# Example
```javascript
const Xogger = require('xogger');

const xogger = new Xogger({
  folder: './logs/folder/',
  name: 'customLogName',
});

xogger.debug('Debug log');
xogger.error('Error log');
xogger.info('Info log');
xogger.warn('Warn log');
```

# Built With
* [Node.js](https://nodejs.org/en/)

# Authors
* [xxgicoxx](https://github.com/xxgicoxx)

# Acknowledgments
* [FlatIcon](https://www.flaticon.com/)