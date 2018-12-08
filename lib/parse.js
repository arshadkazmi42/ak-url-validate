/**
 * This file contains functions for parsing.
 * Anytype of parsing method will be added here.
 */

const CONSTANTS = require('./constants');

const externals = {};

/**
 * parseErrorCode function takes `err` object input
 * parses error code from the err object
 * at present it handles only two types of err object
 * 1. Resource not found
 * 2. Invalid URL
 * 
 * @param: err - Error object
 */
externals.parseErrorCode = (err) => {

  if (err.cause && err.cause.code) {

    return err.cause.code;
  }


  if (err.statusCode) {

    return err.statusCode;
  }

  return 'INVALID';
}

/**
 * parseErrorMessage function takes `err` object input
 * parses error message from the err object
 * at present it handles only two types of err object
 * 1. Resource not found
 * 2. Invalid URL
 * 
 * @param: err - Error object
 */
externals.parseErrorMessage = (err) => {

  if (err.code && err.code.message) {

    return err.code.message;
  }


  if (err.response && err.response.statusMessage) {

    return err.response.statusMessage;
  }

  return CONSTANTS['MESSAGE'].INVALID;
}

module.exports = externals;