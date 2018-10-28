const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema

const EventSchema = new Schema({
  venue: {
    type: Schema.Types.ObjectId,
    ref: "venues"
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date
  },
  lineup: {
    type: [String],
    required: true
  },
  cover: {
    type: Number,
    required: true
  },
  ages: {
    type: String
  },
  ticketslink: {
    type: String
  }
});

module.exports = Event = mongoose.model("events", EventSchema);
