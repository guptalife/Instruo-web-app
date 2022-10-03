const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/logout", authController.protect, authController.logout);
// @TODO
// router.post("/forgotPassword", authController.forgotPassword);
// router.post("/resetPassword/:token", authController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);

// user actions here, eg: event registration, update details, delete account, etc

// Restrict all routes after this middleware to only Admins
router.use(authController.restrictTo("admin"));

// admin actions here, eg: get user/users, update user details, delete user, etc

module.exports = router;
