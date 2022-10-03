const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide your email"],
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: String,
  mobile: {
    type: Number,
    required: [true, "Please provide your contact number"],
  },
  role: {
    type: String,
    enum: {
      values: ["admin", "user"],
      message: "Not a valid role",
    },
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: 8,
    select: false,
  },
  college: {
    type: String,
    required: [true, "Please tell us your college name"],
  },
  dept: {
    type: String,
    required: [true, "Please enter your department"],
  },
  academic_year: {
    type: Number,
    required: [true, "Enter your year"],
  },
  events: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Event",
    },
  ],
});

userSchema.pre(/^find/, function (next) {
  this.populate({
    path: "events",
    select: "-__v",
  });

  next();
});

userSchema.pre("save", async function (next) {
  // Only encrypt password if it was modified
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.matchPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
