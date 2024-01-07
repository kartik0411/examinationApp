const { API_VERSION } = require("../config");
const { validationRequest } = require("../middleware/auth");
const {
  getLoggedInUser,
  createUser,
  getAllchools,
} = require("../services/userServices");
const { auth } = require("../validation/userValidation");

module.exports = (app) => {
  app.post(
    `${API_VERSION}/login`,
    validationRequest(auth.loginUser),
    async (req, res) => {
      try {
        const userObj = await getLoggedInUser(req.body);
        res.status(200).json(userObj);
      } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json(error);
      }
    }
  );

  app.post(
    `${API_VERSION}/signup`,
    validationRequest(auth.signup),
    async (req, res) => {
      try {
        const userObj = await createUser(req.body);
        res.status(200).json(userObj);
      } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json(error);
      }
    }
  );

  app.get(`${API_VERSION}/getAllSchools`, async (req, res) => {
    try {
      const schools = await getAllchools();
      res.status(200).json(schools);
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json(error);
    }
  });
};
