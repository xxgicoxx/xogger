const { XoggerService } = require('../services');

class XoggerController {
  /**
   * @param {Object} [config] Configs
   * @param {string} [config.folder] Folder location
   * @param {string} [config.name] File name
   */
  constructor(config = {}) {
    this._service = new XoggerService(config);
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
   * Error log
   * 
   * @param {string} [message] Log message
   */
  error(message = '') {
    this._service.error(message);
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
   * Info log
   * 
   * @param {string} [message] Log message
   */
  info(message = '') {
    this._service.info(message);
  }
}

module.exports = XoggerController;
