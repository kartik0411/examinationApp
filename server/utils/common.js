const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_SECRET } = require("../config");

const createJWT = (payload, secret = `${JWT_SECRET}`, options = {}) =>
  jwt.sign(payload, secret, options);

const verifyJWT = (token, secret = `${JWT_SECRET}`) =>
  jwt.verify(token, secret);

const comparePasswordHash = (password, userPassword) =>
  bcrypt.compare(password, userPassword);

const hashPassword = (password, hash = 10) => bcrypt.hash(password, hash);

module.exports = {
  createJWT,
  verifyJWT,
  comparePasswordHash,
  hashPassword,
};
