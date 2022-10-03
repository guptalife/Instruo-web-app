const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  photo: String,
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  prize: {
    type: String,
  },
  timeline: [
    {
      round_number: Number,
      desc: String,
      start: Date,
      end: Date,
    },
  ],
  contact: {
    name: String,
    phone: String,
    email: String,
  },
  rules: [String],
  faq: [
    {
      question: String,
      answer: String,
    },
  ],
  participants: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
});

eventSchema.pre(/^find/, function (next) {
  this.populate({
    path: "participants",
    select: "-__v -events",
  });

  next();
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
