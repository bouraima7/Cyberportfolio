const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  skills: [String],
  image: String, // Path to image file
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', ProjectSchema);
