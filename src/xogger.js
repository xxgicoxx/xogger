const fs = require('fs');

save = (message, type, options) => {
    let date = new Date();
    let folder = (options && options.folder) || './logs/';
    let name = (options && options.name) || `${date.getFullYear()}${date.getMonth()}${date.getDate()}`;

    if (!fs.existsSync(folder)){
        fs.mkdirSync(folder);
    }

    fs.appendFileSync(`${folder}${name}.log`, `${date.getTime()} ${type} ${message}\n`);
}

module.exports = {
    debug: (message, options) => {
        save(message, 'DEBUG', options);
    }, error: (message, options) => {
        save(message, 'ERROR', options);
    }, warn: (message, options) => {
        save(message, 'WARN', options);
    }, info: (message, options) => {
        save(message, 'INFO', options);
    }
}