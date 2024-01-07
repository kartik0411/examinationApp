/**
 * @file This file extends Error class with status, message and errors fields.
 * @example throw new CustomError(status, message, errors)
 */
class CustomError extends Error {
  constructor(status, message) {
    /** Pass remaining arguments (including vendor specific ones) to parent constructor */
    super();
    this.status = status;
    this.message = message;
  }
}

module.exports = CustomError;
