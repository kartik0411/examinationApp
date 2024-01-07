const mongoose = require("mongoose");

const { Schema } = mongoose;

const classSchema = new Schema(
  {
    schoolId: {
      type: Schema.Types.ObjectId,
      ref: "school",
    },
    class: {
      type: String,
    },
    sections: [
      {
        section: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const classModel = mongoose.model("class", classSchema);

module.exports = classModel;
