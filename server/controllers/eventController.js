const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");
const Event = require("../models/eventModel");

// {{URL}}/api/v1/events/

exports.createEvent = asyncHandler(async (req, res, next) => {
  const event = await Event.create(req.body);

  res.status(201).json({
    status: "success",
    data: event,
  });
});

exports.getAllEvents = asyncHandler(async (req, res, next) => {
  const events = await Event.find({});

  res.status(200).json({
    status: "success",
    events,
  });
});

// {{URL}}/api/v1/events/:id

exports.getEvent = asyncHandler(async (req, res, next) => {
  const event = await Event.findById(req.params.id);

  if (!event) {
    return next(new AppError("No event found for given ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      event,
    },
  });
});

exports.updateEvent = asyncHandler(async (req, res, next) => {
  const doc = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!doc) {
    return next(new AppError("No event found for given ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      event: doc,
    },
  });
});

exports.deleteEvent = asyncHandler(async (req, res, next) => {
  const doc = await Event.findByIdAndDelete(req.params.id);

  if (!doc) {
    return next(new AppError("No event found for given ID", 404));
  }

  res.status(204).json({});
});
