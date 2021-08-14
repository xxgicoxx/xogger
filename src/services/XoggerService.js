const fs = require('fs');

class XoggerService {
  constructor(config = {}) {
    this.config = config;
  }

  pad(num, size) {
    let s = `${num}`;

    while (s.length < size) {
      s = `0${s}`;
    }

    return s;
  }

  time(date) {
    return `${this.pad(date.getHours(), 2)}:${this.pad(date.getMinutes(), 2)}:${this.pad(date.getSeconds(), 2)}:${date.getMilliseconds()}`;
  }

  add(message, type) {
    const date = new Date();
    const folder = (this.config && this.config.folder) || './logs/';
    const name = (this.config && this.config.name) || `${date.getFullYear()}-${this.pad(date.getMonth() + 1, 2)}-${this.pad(date.getDate(), 2)}`;

    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }

    fs.appendFileSync(`${folder}${name}.log`, `${this.time(date)} ${type} ${message}\n`);
  }

  debug(message = '') {
    this.add(message, '[DEBUG] -');
  }

  error(message = '') {
    this.add(message, '[ERROR] -');
  }

  warn(message = '') {
    this.add(message, '[WARN] -');
  }

  info(message = '') {
    this.add(message, '[INFO] -');
  }
}

module.exports = XoggerService;
