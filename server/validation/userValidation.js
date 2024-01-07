const Joi = require("joi");

const auth = {
  loginUser: Joi.object({
    userName: Joi.string().trim().required(),
    password: Joi.string().trim().min(3).required(),
    role: Joi.string().required().trim().valid("admin", "student", "subAdmin"),
  }),
  signup: Joi.object({
    userName: Joi.string().trim().required(),
    fullName: Joi.string().trim().min(3),
    role: Joi.string().required().trim().valid("admin", "student", "subAdmin"),
    fathersName: Joi.string().trim(),
    admissionNumber: Joi.number(),
    dob: Joi.date(),
    classId: Joi.string().trim(),
    sectionId: Joi.string().trim(),
    password: Joi.string().trim().required(),
    contactNumber: Joi.number(),
    schoolName: Joi.string().trim(),
    schoolType: Joi.string().trim().valid("private", "government"),
    website: Joi.string().trim(),
    schoolNumber: Joi.number(),
    email: Joi.string().email(),
    address: Joi.string().trim(),
    logo: Joi.string().trim(),
  }),
};

module.exports = {
  auth,
};
