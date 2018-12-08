'use strict';
const rp = require('request-promise');

const Util = require('./lib/parse');
const CONSTANTS = require('./lib/constants');

const externals = {}


/**
 * Function takes an url as input and validates by making a request call to it.
 * If url returns statusCode 200 and statusMessage OK, function will consider it a valid URL
 * It returns a JSON with following values
 * 
 * {
 *   isValid,
 *   code,
 *   message
 * }
 * 
 * It only returns message when the url is not valid.
 * 
 * @param url: Input URL to validate
 */
externals.isValidUrl = async (url) => {

  const options = {
    uri: url,
    timeout: 1000,
    resolveWithFullResponse: true
  }

  try {

    const response = await rp(options);
    if (response.statusCode === 200 && response.statusMessage === 'OK') {

      return {
        code: CONSTANTS['CODE'].SUCCESS,
        isValid: true
      }
    }
  } catch (err) {

    return {
      isValid: false,
      code: Util.parseErrorCode(err),
      message: Util.parseErrorMessage(err)
    };
  }

  return {
    isValid: false,
    code: CONSTANTS['CODE'].INVALID,
    message: CONSTANTS['MESSAGE'].INVALID
  };
}


module.exports = externals