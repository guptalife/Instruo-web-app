const express = require("express");
const authController = require("../controllers/authController");
const eventController = require("../controllers/eventController");

const router = express.Router();

router.get("/", eventController.getAllEvents);
router.get("/:id", eventController.getEvent);

router.use(authController.protect, authController.restrictTo("admin"));

router.route("/").post(eventController.createEvent);

router
  .route("/:id")
  .patch(eventController.updateEvent)
  .delete(eventController.deleteEvent);

module.exports = router;
