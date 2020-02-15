const fs = require('fs');

class XoggerService {
  constructor(config = {}) {
    this._config = config;
  }

  _pad(num, size) {
    let s = `${num}`;

    while (s.length < size) {
      s = `0${s}`;
    }

    return s;
  }

  _time(date) {
    return `${this._pad(date.getHours(), 2)}:${this._pad(date.getMinutes(), 2)}:${this._pad(date.getSeconds(), 2)}:${date.getMilliseconds()}`;
  }

  _add(message, type) {
    const date = new Date();
    const folder = (this._config && this._config.folder) || './logs/';
    const name = (this._config && this._config.name) || `${date.getFullYear()}-${this._pad(date.getMonth() + 1, 2)}-${this._pad(date.getDate(), 2)}`;

    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }

    fs.appendFileSync(`${folder}${name}.log`, `${this._time(date)} ${type} ${message}\n`);
  }

  _debug(message = '') {
    this._add(message, '[DEBUG] -');
  }

  _error(message = '') {
    this._add(message, '[ERROR] -');
  }

  _warn(message = '') {
    this._add(message, '[WARN] -');
  }

  _info(message = '') {
    this._add(message, '[INFO] -');
  }
}

module.exports = XoggerService;
