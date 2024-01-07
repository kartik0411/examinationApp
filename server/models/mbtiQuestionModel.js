const mongoose = require("mongoose");

const { Schema } = mongoose;

const mbtiQuestionSchema = new Schema(
  {
    questionText: {
      type: String,
      required: true,
    },
    options: [
      {
        text: [{ type: String }],
        optionNumber: { type: Number },
      },
    ],
    selectedOption: { type: Number },
  },
  { timestamps: true }
);

const mbtiModel = mongoose.model("Mbtiexam", mbtiQuestionSchema);

module.exports = mbtiModel;
