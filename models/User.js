const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  githubId: String,
  username: String,
  profileImage: String,
  images: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Image' }]
});

module.exports = mongoose.model('User', userSchema);
