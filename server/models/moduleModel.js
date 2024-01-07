const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema({
  moduleName: {
    type: String,
    required: true,
    unique: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
});

const Module = mongoose.model("Module", moduleSchema);

module.exports = Module;
