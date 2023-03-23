const fs = require('fs');

const { constants } = require('../utils');

class XoggerService {
  constructor(config = {}) {
    this.config = config;
  }

  info(message = '') {
    this.add(message, constants.INFO);
  }

  debug(message = '') {
    this.add(message, constants.DEBUG);
  }

  warn(message = '') {
    this.add(message, constants.WARNING);
  }

  error(message = '') {
    this.add(message, constants.ERROR);
  }

  padStart(num, size) {
    return num.toString().padStart(size, '0');
  }

  getTimeString(date) {
    return `${this.padStart(date.getHours(), 2)}:${this.padStart(date.getMinutes(), 2)}:${this.padStart(date.getSeconds(), 2)}:${date.getMilliseconds()}`;
  }

  getDateString(date) {
    return `${date.getFullYear()}-${this.padStart(date.getMonth() + 1, 2)}-${this.padStart(date.getDate(), 2)}`;
  }

  add(message, type) {
    const date = new Date();
    const folder = (this.config && this.config.folder) || './logs/';
    const name = (this.config && this.config.name) || this.getDateString(date);

    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }

    fs.appendFileSync(`${folder}${name}.log`, `${this.getTimeString(date)} ${type} ${message}\n`);
  }
}

module.exports = XoggerService;
