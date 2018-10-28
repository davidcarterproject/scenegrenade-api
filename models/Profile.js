const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  company: {
    type: String
  },
  website: {
    type: String
  }
});

module.exports = Venue = mongoose.model("profiles", ProfileSchema);
