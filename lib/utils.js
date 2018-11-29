'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.doesExist = doesExist;
exports.getType = getType;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Performs a quick existence check for a value. A value is determined to exist if it is not
 * `undefined` and not `null`.
 *
 * @param value - The value to check the existence of.
 *
 * @returns {boolean} `true` if value exists (not `undefined` and not `null`), `false` otherwise.
 */
function doesExist(value) {
  return value !== undefined && value !== null;
}

/**
 * Performs a quick type check for a value. This is basically just the `typeof` operator, except it
 * returns "null" (instead of "object") for `null` value and "array" (instead of "object") for an
 * array.
 *
 * @param value - The value to check the type of.
 *
 * @returns {string} The type of the value as a string.
 */
function getType(value) {
  if (value === null) {
    return 'null';
  } else if (Array.isArray(value)) {
    return 'array';
  }

  /* istanbul ignore next */
  return typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value);
}