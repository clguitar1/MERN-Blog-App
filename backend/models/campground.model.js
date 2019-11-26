const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const campgroundSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true
});

const Campground = mongoose.model("Campground", campgroundSchema);

module.exports = Campground;