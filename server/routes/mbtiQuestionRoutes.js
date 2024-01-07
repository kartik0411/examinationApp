const { API_VERSION } = require("../config");
const { validationRequest } = require("../middleware/auth");
const { getLoggedInUser, createUser } = require("../services/userServices");
const { auth } = require("../validation/userValidation");
const MBTI = require("../models/mbtiQuestionModel");

module.exports = (app) => {
  app.get(`${API_VERSION}/question/mbti`, async (req, res) => {
    try {
      const userObj = await MBTI.find({});
      res.status(200).json(userObj);
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json(error);
    }
  });
};
