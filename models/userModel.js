const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const cookie = require("cookie");

//models
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is Required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password length should be 6 character length"],
  },
  customerId: {
    type: String,
    default: "",
  },
  subscription: {
    type: String,
    defualt: "",
  },
});

//hashed password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// match password
userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//SIGN TOKEN
userSchema.methods.getSignedToken = function (res) {
  const accessToken = JWT.sign(
    { id: this._id },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: JWT_ACESS_EXPIREIN }
  );
  const refreshToken = JWT.sign(
    { id: this_.id },
    prcoess.env.JWT_REFRESH_TOKEN,
    { expiresIn: JWT_REFRESH_EXPIREIN }
  );
  res.cookie("refreshToken", `${refreshToken}`, {
    maxAge: 86400 * 700,
    httpOnly: true,
  });
};
const User = mongoose.model("User", userSchema);

module.exports = User;
