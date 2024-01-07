const User = require("../models/userModel");

const getUserInstance = (userObj = {}, proj = {}) =>
  User.findOne(userObj, proj);

const getSchoolsInstances = (userObj = {}, proj = {}) =>
  User.find(userObj, proj);

const createUserInstance = (userObj = {}) => new User(userObj).save();

module.exports = { getUserInstance, createUserInstance, getSchoolsInstances };
