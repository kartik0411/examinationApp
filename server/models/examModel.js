const mongoose = require("mongoose");

const { Schema } = mongoose;

// Exam start time and end time should be made in different collection because
// exam schema works for all students and exam duration we have to keep track
// for individual students.Same goes for start exam and end exam

const examSchema = new Schema(
  {
    examKey: {
      type: Number,
      required: true,
    },
    schoolId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    moduleId: {
      type: Schema.Types.ObjectId,
      ref: "Module",
    },
    classId: {
      type: Schema.Types.ObjectId,
      ref: "class",
    },
    sectionId: {
      type: String,
    },
    duration: {
      type: Date,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const examModel = mongoose.model("Exam", examSchema);

module.exports = examModel;
