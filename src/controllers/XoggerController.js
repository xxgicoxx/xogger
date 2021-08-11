const { XoggerService } = require('../services');

class XoggerController {
  /**
    * Xogger config
    *
    * @param {Object} [config] configs
    * @param {string} [config.folder] folder location
    * @param {string} [config.name] file name
    */
  constructor(config = {}) {
    this._xoggerService = new XoggerService(config);
  }

  /**
    * Debug log
    *
    * @param {string} [message] log message
    */
  debug(message = '') {
    this._xoggerService._debug(message);
  }

  /**
    * Error log
    *
    * @param {string} [message] log message
    */
  error(message = '') {
    this._xoggerService._error(message);
  }

  /**
    * Warning log
    *
    * @param {string} [message] log message
    */
  warn(message = '') {
    this._xoggerService._warn(message);
  }

  /**
    * Info log
    *
    * @param {string} [message] log message
    */
  info(message = '') {
    this._xoggerService._info(message);
  }
}

module.exports = XoggerController;
