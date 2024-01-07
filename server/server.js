const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const mbtiQuestionRoutes = require("./routes/mbtiQuestionRoutes");

module.exports = (app) => {
  app.use(cors());
  userRoutes(app);
  mbtiQuestionRoutes(app);
};
