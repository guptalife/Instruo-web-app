const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");
const User = require("../models/userModel");
const Email = require("../utils/email");

const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

const createSendToken = (user, statusCode, res) => {
  const token = generateToken(user._id);

  // Don't show user password in res
  user.password = undefined;

  res
    .cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    })
    .status(statusCode)
    .json({
      status: "success",
      data: {
        user,
      },
    });
};

exports.signup = asyncHandler(async (req, res, next) => {
  const { email } = req.body;

  const foundUser = await User.findOne({ email: email });
  if (foundUser) {
    return next(new AppError("User already exist", 400));
  }

  const user = await User.create(req.body);

  createSendToken(user, 201, res);
});

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Check if user exists && password is correct
  const user = await User.findOne({ email: email }).select("+password");

  if (!user || !(await user.matchPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  // Send token to client
  createSendToken(user, 200, res);
});

exports.protect = asyncHandler(async (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(
      new AppError("You are not logged in! Please login to get access.", 401)
    );
  }

  // Verification of token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // Check if user exists
  const user = await User.findById(decoded.id);
  if (!user) {
    return next(new AppError("Not authorised, invalid token", 401));
  }

  if (user.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError(
        "User changed password after jwt was issued! Please login again",
        401
      )
    );
  }

  // Grant Access To Protected Route
  req.user = user;
  next();
});

exports.logout = asyncHandler(async (req, res, next) => {
  res.clearCookie("access_token").status(200).json({
    status: "success",
    message: "Logged out successfully",
  });
});

exports.restrictTo =
  (...roles) =>
  (req, res, next) => {
    if (roles.includes(req.user.role)) return next();

    return next(
      new AppError("You don't have permission to perform this action.", 403)
    );
  };

exports.forgotPassword = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("User not found for given email", 404));
  }

  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  try {
    const resetURL = `${req.protocol}://${req.get(
      "host"
    )}/api/v1/users/resetPassword/${resetToken}`;

    await new Email(user, resetURL).sendPasswordReset();

    res.status(200).json({
      status: "success",
      message: "Token sent to email!",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpired = undefined;
    await user.save({ validateBeforeSave: false });

    console.log(err);

    return next(
      new AppError("There was an error sending the email. Try again later!"),
      500
    );
  }
});

exports.resetPassword = asyncHandler(async (req, res, next) => {
  // 1) Get user based on the token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpired: { $gt: Date.now() },
  });

  // 2) If token has not expired, and there is user, set the new password
  if (!user) {
    return next(new AppError("Token is invalid or has expired", 400));
  }

  user.password = req.body.password;
  user.passwordResetToken = undefined;
  user.passwordResetExpired = undefined;
  await user.save();

  createSendToken(user, 200, res);
});
