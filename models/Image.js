const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  url: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Image', imageSchema);
