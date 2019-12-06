const fs = require('fs');
let opt = {};

add = (message, type) => {
    let date = new Date();
    let folder = (opt && opt.folder) || './logs/';
    let name = (opt && opt.name) || `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

    if (!fs.existsSync(folder)){
        fs.mkdirSync(folder, {recursive: true});
    }

    fs.appendFileSync(`${folder}${name}.log`, `${getTime(date)} ${type} ${message}\n`);
}

feed = () => {
    let date = new Date();
    let folder = (opt && opt.folder) || './logs/';
    let name = (opt && opt.name) || `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

    if (!fs.existsSync(folder)){
        fs.mkdirSync(folder, {recursive: true});
    }

    fs.appendFileSync(`${folder}${name}.log`, `\n`);
}

pad = (num, size) => {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

getTime = (date) => {
    return `${pad(date.getHours(), 2)}:${pad(date.getMinutes(), 2)}:${pad(date.getSeconds(), 2)}:${date.getMilliseconds()}`;
}

module.exports = {
    config: (options) => {
        opt = options;
    }, debug: (message) => {
        add(message, '[DEBUG] -');
    }, error: (message) => {
        add(message, '[ERROR] -');
    }, warn: (message) => {
        add(message, '[WARN] -');
    }, info: (message) => {
        add(message, '[INFO] -');
    }, feed: () => {
        feed();
    }
}