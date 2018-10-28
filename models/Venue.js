const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema

const VenueSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  accessibility: {
    type: String
  }
});

module.exports = Venue = mongoose.model("venues", VenueSchema);
