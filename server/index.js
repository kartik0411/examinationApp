const express = require("express");
const http = require("http");
const helmet = require("helmet");
const server = require("./server");
const databaseConnection = require("./database/connection");
const { PORT } = require("./config");
const { log } = require("console");

const app = express();

app.use(express.json());

const httpserver = http.createServer(app);

databaseConnection()
  .then(() => {
    server(app);
    httpserver
      .listen(Number(PORT) || 8000, () => {
        console.log("DB Connected");
        console.log(`app is listening to port ${PORT}`);
      })
      .on("error", (err) => {
        console.log(`${err.stack || err}`);
        process.exit();
      });
  })
  .catch((err) => {
    console.log(err);
  });
