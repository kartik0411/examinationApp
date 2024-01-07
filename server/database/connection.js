const mongoose = require("mongoose");
const { DB_URL } = require("../config");
// const { logs } = require("../logger");

module.exports = async () => {
  return mongoose.connect(DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};
