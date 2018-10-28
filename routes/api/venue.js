const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Venue model

const Venue = require("../../models/Venue");

// Load User model
const User = require("../../models/User");

// @route GET api/venue/test
// @desc Tests venue route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Venue works" }));

// @route GET api/venue
// @desc Get current users venue
// @access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Venue.findOne({ user: req.user.id })
      .then(venue => {
        if (!venue) {
          errors.novenue = "There is no venue for this user";
          return res.status(404).json(errors);
        }
        res.json(venue);
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
