const { XoggerService } = require('../services');

class XoggerController {
  /**
   * @param {Object} [config] Configs
   * @param {string} [config.folder] Folder location
   * @param {string} [config.name] File name
   */
  constructor(config = {}) {
    this._config = config;

    this._service = new XoggerService(this._config);
  }

  /**
   * Info log
   *
   * @param {string} [message] Log message
   */
  info(message = '') {
    this._service.info(message);
  }

  /**
   * Debug log
   *
   * @param {string} [message] Log message
   */
  debug(message = '') {
    this._service.debug(message);
  }

  /**
   * Warning log
   *
   * @param {string} [message] Log message
   */
  warn(message = '') {
    this._service.warn(message);
  }

  /**
   * Error log
   *
   * @param {string} [message] Log message
   */
  error(message = '') {
    this._service.error(message);
  }
}

module.exports = XoggerController;
