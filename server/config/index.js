require("dotenv").config();

const { env } = process;

module.exports = {
  PORT: env.PORT,
  DB_URL: env.DB_URL,
  API_VERSION: env.API_VERSION,
  JWT_SECRET: env.JWT_SECRET,
};
