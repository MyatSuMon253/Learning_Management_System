const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const adminSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "admin",
    },
    academicTerms: [
      {
        type: Schema.Types.ObjectId,
        ref: "AcademicTerm",
      },
    ],
    academicYears: [
      {
        type: Schema.Types.ObjectId,
        ref: "AcademicYear",
      },
    ],
    classLevels: [
      {
        type: Schema.Types.ObjectId,
        ref: "ClassLevel",
      },
    ],
    teachers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Teacher",
      },
    ],
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// model
const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
