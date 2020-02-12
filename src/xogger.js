const fs = require('fs');

let opt = {};

function pad(num, size) {
  let s = `${num}`;

  while (s.length < size) {
    s = `0${s}`;
  }

  return s;
}

function getTime(date) {
  return `${pad(date.getHours(), 2)}:${pad(date.getMinutes(), 2)}:${pad(date.getSeconds(), 2)}:${date.getMilliseconds()}`;
}

function add(message, type) {
  const date = new Date();
  const folder = (opt && opt.folder) || './logs/';
  const name = (opt && opt.name) || `${date.getFullYear()}-${pad(date.getMonth() + 1, 2)}-${pad(date.getDate(), 2)}`;

  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  fs.appendFileSync(`${folder}${name}.log`, `${getTime(date)} ${type} ${message}\n`);
}

function feed() {
  const date = new Date();
  const folder = (opt && opt.folder) || './logs/';
  const name = (opt && opt.name) || `${date.getFullYear()}-${pad(date.getMonth() + 1, 2)}-${pad(date.getDate(), 2)}`;

  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  fs.appendFileSync(`${folder}${name}.log`, '\n');
}

module.exports = {
  config: (options) => {
    opt = options;
  },
  debug: (message) => {
    add(message, '[DEBUG] -');
  },
  error: (message) => {
    add(message, '[ERROR] -');
  },
  warn: (message) => {
    add(message, '[WARN] -');
  },
  info: (message) => {
    add(message, '[INFO] -');
  },
  feed: () => {
    feed();
  },
};
